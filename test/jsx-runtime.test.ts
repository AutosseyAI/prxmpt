import { describe, expect, test } from "@jest/globals";
import { jsx, jsxDEV } from "../source/jsx-runtime.js";

describe("jsx", () => {
  test("basic", () => {
    const result = jsx("text", { children: "Test" }, undefined);
    expect(result).toEqual("Test");
  });
  test("with key", () => {
    const result = jsx("kv", { children: "Test" }, "test");
    expect(result).toEqual("test: Test");
  });
});

describe("jsxDEV", () => {
  test("basic", () => {
    const result = jsxDEV("text", { children: "Test" }, undefined, true, undefined, undefined);
    expect(result).toEqual("Test");
  });
  test("with key", () => {
    const result = jsxDEV("kv", { children: "Test" }, "test", true, undefined, undefined);
    expect(result).toEqual("test: Test");
  });
});
