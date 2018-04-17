import fs from "fs-extra";
import "jest";
import { input, output } from "./io";

beforeAll(() => {
  fs.removeSync("test-output");
  fs.mkdirSync("test-output");
});

afterAll(() => {
  fs.removeSync("test-output");
});

test("overridable file creates clean new file", () => {
  output(
    {
      kind: "overridable-file",
      template: `
import * as abc from 'abc';

%insert1%

%insert2%
`,
      content: {
        insert1: "Hi!",
        insert2: "Hello",
      },
      markerFormat: "// %marker%",
    },
    "test-output/abc",
  );
  expect(input("test-output")).toEqual({
    kind: "directory",
    children: {
      abc: {
        kind: "file",
        content: `
import * as abc from 'abc';

// start-generated-section insert1
Hi!
// end-generated-section insert1

// start-generated-section insert2
Hello
// end-generated-section insert2
`,
      },
    },
  });
});

test("overridable file merges cleanly with existing file", () => {
  output(
    {
      kind: "file",
      content: `
import * as def from 'def';

// start-generated-section insert1
Blah

blah
// end-generated-section insert1

// start-generated-section insert2
// end-generated-section insert2
`,
    },
    "test-output/abc",
  );
  output(
    {
      kind: "overridable-file",
      template: `
import * as abc from 'abc';

%insert1%

%insert2%
`,
      content: {
        insert1: "Hi!",
        insert2: "Hello",
      },
      markerFormat: "// %marker%",
    },
    "test-output/abc",
  );
  expect(input("test-output")).toEqual({
    kind: "directory",
    children: {
      abc: {
        kind: "file",
        content: `
import * as def from 'def';

// start-generated-section insert1
Hi!
// end-generated-section insert1

// start-generated-section insert2
Hello
// end-generated-section insert2
`,
      },
    },
  });
});

test("overridable file complains about mangled sections in existing file", () => {
  output(
    {
      kind: "file",
      content: `
import * as def from 'def';

// start-generated-section insert1
Blah

blah

// start-generated-section insert2
// end-generated-section insert1
// end-generated-section insert2
`,
    },
    "test-output/abc",
  );
  expect(() =>
    output(
      {
        kind: "overridable-file",
        template: `
import * as abc from 'abc';

%insert1%

%insert2%
`,
        content: {
          insert1: "Hi!",
          insert2: "Hello",
        },
        markerFormat: "// %marker%",
      },
      "test-output/abc",
    ),
  ).toThrow(
    "Unexpectedly mangled sections insert1 and insert2 in test-output/abc.",
  );
});

test("overridable file complains about missing sections in existing file", () => {
  output(
    {
      kind: "file",
      content: `
import * as def from 'def';

// start-generated-section insert1
Blah

blah

// end-generated-section insert1

// insert2 section is missing!
`,
    },
    "test-output/abc",
  );
  expect(() =>
    output(
      {
        kind: "overridable-file",
        template: `
import * as abc from 'abc';

%insert1%

%insert2%
`,
        content: {
          insert1: "Hi!",
          insert2: "Hello",
        },
        markerFormat: "// %marker%",
      },
      "test-output/abc",
    ),
  ).toThrow(
    "Could not find start of generated section for insert2 in test-output/abc.",
  );
});
