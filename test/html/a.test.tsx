import { describe, expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

describe("a", () => {
  test("single line", () => {
    const text = <a href="https://example.com" title="Testing">Test</a>;
    expect(text).toEqual('[Test](https://example.com "Testing")');
  });
  test("single line html", () => {
    const text = <a href="https://example.com" title="Testing" html>Test</a>;
    expect(text).toEqual('<a href="https://example.com" title="Testing">Test</a>');
  });
});
