import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("parens", () => {
  test("simple", () => {
    const text = <parens>Test</parens>;
    expect(text).toEqual("(Test)");
  });
});

describe("square", () => {
  test("simple", () => {
    const text = <square>Test</square>;
    expect(text).toEqual("[Test]");
  });
});

describe("curly", () => {
  test("simple", () => {
    const text = <curly>Test</curly>;
    expect(text).toEqual("{Test}");
  });
});

describe("angle", () => {
  test("simple", () => {
    const text = <angle>Test</angle>;
    expect(text).toEqual("<Test>");
  });
});

