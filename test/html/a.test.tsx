import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("a", () => {
  test("single line", () => {
    const text = <a href="https://example.com" title="Testing">Test</a>;
    assert.equal(text, '[Test](https://example.com "Testing")');
  });
  test("single line html", () => {
    const text = <a href="https://example.com" title="Testing" html>Test</a>;
    assert.equal(text, '<a href="https://example.com" title="Testing">Test</a>');
  });
});
