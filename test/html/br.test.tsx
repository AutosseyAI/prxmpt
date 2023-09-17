import assert from "node:assert";
import { test } from "node:test";
import * as Prxmpt from "../../source/index.js";

test("br", () => {
  const br = <br />;
  assert.equal(br, "\n");
});
