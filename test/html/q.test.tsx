import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("q", () => {
  test("single line", () => {
    const text = <q>Test</q>;
    assert.equal(text, '"Test"');
  });
  test("multi line", () => {
    const text = <q>Test<br />Test<br />Test</q>;
    assert.equal(text, '"""\nTest\nTest\nTest\n"""');
  });
  test("single line single quote", () => {
    const text = <q type="single">Test</q>;
    assert.equal(text, "'Test'");
  });
  test("multi line single quote", () => {
    const text = <q type="single">Test<br />Test<br />Test</q>;
    assert.equal(text, "'''\nTest\nTest\nTest\n'''");
  });
  test("single line html", () => {
    const text = <q html>Test</q>;
    assert.equal(text, '<q>Test</q>');
  });
  test("multi line html", () => {
    const text = <q html>Test<br />Test<br />Test</q>;
    assert.equal(text, '<q>\n  Test\n  Test\n  Test\n</q>');
  });
});
