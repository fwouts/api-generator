import fs from "fs-extra";
import path from "path";

export interface Directory {
  kind: "directory";
  children: {
    [name: string]: File | OverridableFile | Directory;
  };
}

export interface File {
  kind: "file";
  content: string;
  doNotOverride?: boolean;
}

export interface OverridableFile {
  kind: "overridable-file";

  // Example of template:
  //
  // ```
  // import * as abc from 'abc';
  //
  // %insert1%
  //
  // %insert2%
  // ```
  //
  // Each %-delimited section will be replaced with the corresponding content.
  template: string;

  // Content to put in each section above.
  //
  // When the file doesn't exist, the content below will be put in each section above.
  //
  // When the file does exist, the previous content will be replaced thanks to markers
  // in the code, as in:
  //
  // ```
  // import * as abc from 'abc';
  //
  // // start-generated-section insert1
  // ...
  // // end-generated-section insert1
  //
  //
  // // start-generated-section insert2
  // ...
  // // end-generated-section insert2
  // ```
  //
  content: { [key: string]: string };

  // Format of a section marker. For example in TypeScript/JavaScript we use double slash,
  // so markerFormat will be "// %marker%".
  markerFormat: string;
}

export function output(
  item: File | OverridableFile | Directory,
  destination: string,
) {
  if (item.kind === "directory") {
    for (const [childName, child] of Object.entries(item.children)) {
      output(child, path.join(destination, childName));
    }
  } else if (item.kind === "file") {
    if (fs.existsSync(destination)) {
      if (item.doNotOverride) {
        return;
      }
      if (!fs.lstatSync(destination).isFile()) {
        throw new Error(`Expected ${destination} to be a file.`);
      }
    }
    fs.outputFileSync(destination, item.content);
  } else if (item.kind === "overridable-file") {
    if (fs.existsSync(destination)) {
      if (!fs.lstatSync(destination).isFile()) {
        throw new Error(`Expected ${destination} to be a file.`);
      }
      const existingContent = fs.readFileSync(destination, "utf8");
      const sectionPositions: Array<{
        key: string;
        start: number;
        end: number;
      }> = [];
      for (const key of Object.keys(item.content)) {
        const startMarker = item.markerFormat.replace(
          "%marker%",
          `start-generated-section ${key}`,
        );
        const start = existingContent.indexOf(startMarker);
        if (start === -1) {
          throw new Error(
            `Could not find start of generated section for ${key} in ${destination}.`,
          );
        }
        const endMarker = item.markerFormat.replace(
          "%marker%",
          `end-generated-section ${key}`,
        );
        let end = existingContent.indexOf(endMarker, start);
        if (end === -1) {
          throw new Error(
            `Could not find end of generated section for ${key} in ${destination}.`,
          );
        }
        end += endMarker.length;
        sectionPositions.push({ key, start, end });
      }
      sectionPositions.sort((a, b) => b.start - a.start);
      for (let i = 0; i < sectionPositions.length - 1; i++) {
        if (sectionPositions[i].start < sectionPositions[i + 1].end) {
          throw new Error(
            `Unexpectedly mangled sections ${sectionPositions[i + 1].key} and ${
              sectionPositions[i].key
            } in ${destination}.`,
          );
        }
      }
      let formattedContent = existingContent;
      for (const sectionPosition of sectionPositions) {
        const startMarker = item.markerFormat.replace(
          "%marker%",
          `start-generated-section ${sectionPosition.key}`,
        );
        const endMarker = item.markerFormat.replace(
          "%marker%",
          `end-generated-section ${sectionPosition.key}`,
        );
        formattedContent =
          formattedContent.substr(0, sectionPosition.start) +
          startMarker +
          "\n" +
          item.content[sectionPosition.key] +
          "\n" +
          endMarker +
          formattedContent.substr(sectionPosition.end);
      }
      fs.outputFileSync(destination, formattedContent);
    } else {
      const keysMatcher = new RegExp(
        `%(${Object.keys(item.content)
          .map((key) => `${key}`)
          .join("|")})%`,
        "g",
      );
      const formattedContent = item.template.replace(keysMatcher, (_, key) => {
        const startMarker = item.markerFormat.replace(
          "%marker%",
          `start-generated-section ${key}`,
        );
        const endMarker = item.markerFormat.replace(
          "%marker%",
          `end-generated-section ${key}`,
        );
        return startMarker + "\n" + item.content[key] + "\n" + endMarker;
      });
      fs.outputFileSync(destination, formattedContent);
    }
  }
}

export function input(source: string): File | Directory {
  const lstat = fs.lstatSync(source);
  if (lstat.isDirectory()) {
    const dir = fs.readdirSync(source);
    const items = dir.map((name): [string, File | Directory] => [
      name,
      input(path.join(source, name)),
    ]);
    return {
      kind: "directory",
      children: items.reduce((acc, [name, item]) => {
        return {
          ...acc,
          [name]: item,
        };
      }, {}),
    };
  } else if (lstat.isFile()) {
    return {
      kind: "file",
      content: fs.readFileSync(source, "utf8"),
    };
  } else {
    throw new Error(`Unsupported input: ${source}.`);
  }
}
