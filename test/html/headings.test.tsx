import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("text", () => {
  test("h1", () => {
    const text = <h1>Test</h1>;
    expect(text).toEqual("# Test");
  });
  test("h2", () => {
    const text = <h2>Test</h2>;
    expect(text).toEqual("## Test");
  });
  test("h3", () => {
    const text = <h3>Test</h3>;
    expect(text).toEqual("### Test");
  });
  test("h4", () => {
    const text = <h4>Test</h4>;
    expect(text).toEqual("#### Test");
  });
  test("h5", () => {
    const text = <h5>Test</h5>;
    expect(text).toEqual("##### Test");
  });
  test("h6", () => {
    const text = <h6>Test</h6>;
    expect(text).toEqual("###### Test");
  });
});

describe("html", () => {
  test("h1", () => {
    const text = <h1 html>Test</h1>;
    expect(text).toEqual("<h1>Test</h1>");
  });
  test("h2", () => {
    const text = <h2 html>Test</h2>;
    expect(text).toEqual("<h2>Test</h2>");
  });
  test("h3", () => {
    const text = <h3 html>Test</h3>;
    expect(text).toEqual("<h3>Test</h3>");
  });
  test("h4", () => {
    const text = <h4 html>Test</h4>;
    expect(text).toEqual("<h4>Test</h4>");
  });
  test("h5", () => {
    const text = <h5 html>Test</h5>;
    expect(text).toEqual("<h5>Test</h5>");
  });
  test("h6", () => {
    const text = <h6 html>Test</h6>;
    expect(text).toEqual("<h6>Test</h6>");
  });
});
