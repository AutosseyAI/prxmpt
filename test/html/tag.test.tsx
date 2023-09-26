import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("empty", () => {
  const string = <tag name="test" />;
  expect(string).toEqual("<test />");
});

test("attributes", () => {
  const string = <tag name="test" attributes={{ a: true, b: false, c: "string" }} />;
  expect(string).toEqual('<test a c="string" />');
});
