import { expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

test("br", () => {
  const br = <br />;
  expect(br).toEqual("\n");
});
