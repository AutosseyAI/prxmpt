import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("i", () => {
  test("basic", () => {
    const string = <i>Test</i>;
    expect(string).toEqual("_Test_");
  });
  test("char", () => {
    const string = <i char="*">Test</i>;
    expect(string).toEqual("*Test*");
  });
  test("html", () => {
    const string = <i html>Test</i>;
    expect(string).toEqual("<i>Test</i>");
  });
});

describe("<b>", () => {
  test("basic", () => {
    const string = <b>Test</b>;
    expect(string).toEqual("**Test**");
  });
  test("char", () => {
    const string = <b char="_">Test</b>;
    expect(string).toEqual("__Test__");
  });
  test("html", () => {
    const string = <b html>Test</b>;
    expect(string).toEqual("<b>Test</b>");
  });
});

describe("<code>", () => {
  test("basic", () => {
    const string = <code>Test</code>;
    expect(string).toEqual("`Test`");
  });
  test("html", () => {
    const string = <code html>Test</code>;
    expect(string).toEqual("<code>Test</code>");
  });
});

describe("<s>", () => {
  test("basic", () => {
    const string = <s>Test</s>;
    expect(string).toEqual("~~Test~~");
  });
  test("html", () => {
    const string = <s html>Test</s>;
    expect(string).toEqual("<s>Test</s>");
  });
});

