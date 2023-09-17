import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("tsq", () => {
  test("simple", () => {
    const text = <tsq>Test</tsq>;
    assert.equal(text, "'''\nTest\n'''");
  });
  test("prefix", () => {
    const text = <tsq prefix={"Title:\n"}>Test</tsq>;
    assert.equal(text, "Title:\n'''\nTest\n'''");
  });
});
