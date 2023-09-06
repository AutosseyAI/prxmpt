import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("span", () => {
  test("base", () => {
    const text = <span>Test</span>;
    assert(text === "Test");
  });

  test("hide", () => {
    const text = <span hide>Test</span>;
    assert(text === "");
  });

  test("block", () => {
    const text = <span block>Test</span>;
    assert(text === "Test\n");
  });

  test("hide block", () => {
    const text = <span hide block>Test</span>;
    assert(text === "");
  });
});


