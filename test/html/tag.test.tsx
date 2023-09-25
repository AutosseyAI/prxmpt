import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("empty", () => {
  const string = <tag name="test" />;
  expect(string).toEqual("<test />");
});
