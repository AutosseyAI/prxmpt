import { describe, expect, test } from "bun:test";
import { createElement, render } from "../source/index.js";

describe("render", () => {
  test("string", () => {
    const result = render("Test");
    expect(result).toEqual("Test");
  });
  test("strings", () => {
    const result = render(["Test", "Test"]);
    expect(result).toEqual("TestTest");
  });
  test("number", () => {
    const result = render(1);
    expect(result).toEqual("1");
  });
  test("true", () => {
    const result = render(true);
    expect(result).toEqual("true");
  });
  test("false", () => {
    const result = render(false);
    expect(result).toEqual("false");
  });
  test("null", () => {
    const result = render(null);
    expect(result).toEqual("");
  });
  test("undefined", () => {
    const result = render(undefined);
    expect(result).toEqual("");
  });
  test("mixed", () => {
    const result = render(["Test", 1, true, null, undefined]);
    expect(result).toEqual("Test1true");
  });
});

describe("createElement", () => {
  test("string", () => {
    const result = createElement("text", {}, "Test");
    expect(result).toEqual("Test");
  });
});
