import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("div", () => {
  test("text", () => {
    const string = <div>Test</div>;
    expect(string).toEqual("---\nTest\n---");
  });
  test("title", () => {
    const string = <div title="Title">Test</div>;
    expect(string).toEqual("Title:\n---\nTest\n---");
  });
  test("html", () => {
    const string = <div html>Test</div>;
    expect(string).toEqual("<div>Test</div>");
  });
});
