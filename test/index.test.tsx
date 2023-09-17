import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../source/index.js";

describe("render", () => {
  test("string", () => {
    const result = Prxmpt.render("Test");
    assert.equal(result, "Test");
  });
  test("strings", () => {
    const result = Prxmpt.render(["Test", "Test"]);
    assert.equal(result, "TestTest");
  });
  test("number", () => {
    const result = Prxmpt.render(1);
    assert.equal(result, "1");
  });
  test("true", () => {
    const result = Prxmpt.render(true);
    assert.equal(result, "true");
  });
  test("false", () => {
    const result = Prxmpt.render(false);
    assert.equal(result, "false");
  });
  test("null", () => {
    const result = Prxmpt.render(null);
    assert.equal(result, "");
  });
  test("undefined", () => {
    const result = Prxmpt.render(undefined);
    assert.equal(result, "");
  });
  test("mixed", () => {
    const result = Prxmpt.render(["Test", 1, true, null, undefined]);
    assert.equal(result, "Test1true");
  });
});
