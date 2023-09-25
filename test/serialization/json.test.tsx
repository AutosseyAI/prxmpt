import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("basic", () => {
  const string = (
    <json
      data={{
        a: "string",
        b: {
          c: 1,
          d: [2, 3]
        }
      }} />
  );
  expect(string).toEqual('{"a":"string","b":{"c":1,"d":[2,3]}}');
});

test("pretty", () => {
  const string = (
    <json
      pretty
      data={{
        a: "string",
        b: {
          c: 1
        }
      }} />
  );
  expect(string).toEqual('{\n  "a": "string",\n  "b": {\n    "c": 1\n  }\n}');
});
