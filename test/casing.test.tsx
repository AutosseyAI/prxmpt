import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../source/index.js";

describe("casing", () => {
  test("casing", () => {
    const text = <casing>Test</casing>;
    assert(text === "Test");
  });

  test("upper", () => {
    const text = <upper>Test</upper>;
    assert.equal(text, "TEST");
  });

  test("lower", () => {
    const text = <lower>Test</lower>;
    assert.equal(text, "test");
  });

  test("capital", () => {
    const text = <capital>test test test</capital>;
    assert.equal(text,"Test test test");
  });

  test("title", () => {
    const text = <title>test test test</title>;
    assert.equal(text, "Test Test Test");
  });
});


