import { describe, expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

describe("tsq", () => {
  test("simple", () => {
    const text = <tsq>Test</tsq>;
    expect(text).toEqual("'''\nTest\n'''");
  });
  test("prefix", () => {
    const text = <tsq prefix={"Title:\n"}>Test</tsq>;
    expect(text).toEqual("Title:\n'''\nTest\n'''");
  });
});
