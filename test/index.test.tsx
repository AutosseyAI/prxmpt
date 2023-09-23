import { describe, expect, test } from "bun:test";
import Prxmpt from "../source/index.js";

describe("render", () => {
  test("string", () => {
    const result = Prxmpt.render("Test");
    expect(result).toEqual("Test");
  });
  test("strings", () => {
    const result = Prxmpt.render(["Test", "Test"]);
    expect(result).toEqual("TestTest");
  });
  test("number", () => {
    const result = Prxmpt.render(1);
    expect(result).toEqual("1");
  });
  test("true", () => {
    const result = Prxmpt.render(true);
    expect(result).toEqual("true");
  });
  test("false", () => {
    const result = Prxmpt.render(false);
    expect(result).toEqual("false");
  });
  test("null", () => {
    const result = Prxmpt.render(null);
    expect(result).toEqual("");
  });
  test("undefined", () => {
    const result = Prxmpt.render(undefined);
    expect(result).toEqual("");
  });
  test("mixed", () => {
    const result = Prxmpt.render(["Test", 1, true, null, undefined]);
    expect(result).toEqual("Test1true");
  });
});
