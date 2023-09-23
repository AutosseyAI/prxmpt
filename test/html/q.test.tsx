import { describe, expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

describe("q", () => {
  test("single line", () => {
    const text = <q>Test</q>;
    expect(text).toEqual('"Test"');
  });
  test("multi line", () => {
    const text = <q>Test<br />Test<br />Test</q>;
    expect(text).toEqual('"""\nTest\nTest\nTest\n"""');
  });
  test("single line single quote", () => {
    const text = <q type="single">Test</q>;
    expect(text).toEqual("'Test'");
  });
  test("multi line single quote", () => {
    const text = <q type="single">Test<br />Test<br />Test</q>;
    expect(text).toEqual("'''\nTest\nTest\nTest\n'''");
  });
  test("single line html", () => {
    const text = <q html>Test</q>;
    expect(text).toEqual('<q>Test</q>');
  });
  test("multi line html", () => {
    const text = <q html>Test<br />Test<br />Test</q>;
    expect(text).toEqual('<q>\n  Test\n  Test\n  Test\n</q>');
  });
});
