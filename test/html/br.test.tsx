import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("br", () => {
  const br = <br />;
  expect(br).toEqual("\n");
});
