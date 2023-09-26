import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("img", () => {
  test("single line", () => {
    const text = <img src="https://example.com" title="Testing">Test</img>;
    expect(text).toEqual('![Test](https://example.com "Testing")');
  });
  test("single line html", () => {
    const text = <img src="https://example.com" title="Testing" html>Test</img>;
    expect(text).toEqual('<img src="https://example.com" alt="Test" title="Testing" />');
  });
});
