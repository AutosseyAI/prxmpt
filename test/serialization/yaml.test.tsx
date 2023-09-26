import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("basic", () => {
  const string = (
    <yaml
      data={{
        a: "string",
        b: {
          c: 1,
          d: [2, 3]
        }
      }} />
  );
  expect(string).toEqual("---\na: string\nb:\n  c: 1\n  d:\n  - 2\n  - 3");
});

test("noStartMarker", () => {
  const string = (
    <yaml
      noStartMarker
      data={{
        a: "string",
        b: {
          c: 1,
          d: [2, 3]
        }
      }} />
  );
  expect(string).toEqual("a: string\nb:\n  c: 1\n  d:\n  - 2\n  - 3");
});

test("sequenceIndent", () => {
  const string = (
    <yaml
      sequenceIndent
      data={{
        a: "string",
        b: {
          c: 1,
          d: [2, 3]
        }
      }} />
  );
  expect(string).toEqual("---\na: string\nb:\n  c: 1\n  d:\n    - 2\n    - 3");
});
