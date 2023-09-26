import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("br", () => {
  test("text", () => {
    const string = <br />;
    expect(string).toEqual("\n");
  });
  test("html", () => {
    const string = <br html />;
    expect(string).toEqual("<br />");
  });
});

describe("hr", () => {
  test("text", () => {
    const string = <hr />;
    expect(string).toEqual("---");
  });
  test("char", () => {
    const string = <hr char="*" width={5} />;
    expect(string).toEqual("*****");
  });
  test("html", () => {
    const string = <hr html />;
    expect(string).toEqual("<hr />");
  });
});
