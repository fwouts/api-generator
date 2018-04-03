import fs from "fs-extra";
import path from "path";

export interface Directory {
  kind: "directory";
  children: {
    [name: string]: File | Directory;
  };
}

export interface File {
  kind: "file";
  content: string;
  doNotOverride?: boolean;
}

export function output(item: File | Directory, destination: string) {
  if (item.kind === "directory") {
    for (const [childName, child] of Object.entries(item.children)) {
      output(child, path.join(destination, childName));
    }
  } else if (!fs.existsSync(destination) || !item.doNotOverride) {
    fs.outputFileSync(destination, item.content);
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
