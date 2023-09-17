import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("parens", () => {
  test("simple", () => {
    const text = <parens>Test</parens>
    assert.equal(text, "(Test)");
  });
});

describe("square", () => {
  test("simple", () => {
    const text = <square>Test</square>
    assert.equal(text, "[Test]");
  });
});

describe("curly", () => {
  test("simple", () => {
    const text = <curly>Test</curly>
    assert.equal(text, "{Test}");
  });
});

describe("angle", () => {
  test("simple", () => {
    const text = <angle>Test</angle>
    assert.equal(text, "<Test>");
  });
});

