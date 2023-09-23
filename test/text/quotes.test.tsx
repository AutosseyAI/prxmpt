import { describe, expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

describe("sq", () => {
  test("escape", () => {
    const text = <sq>Test'ing</sq>;
    expect(text).toEqual("'Test\\'ing'");
  });
  test("no escape", () => {
    const text = <sq noEscape>Test'ing</sq>;
    expect(text).toEqual("'Test'ing'");
  });
});

describe("dq", () => {
  test("single line", () => {
    const text = <dq>Test</dq>;
    expect(text).toEqual('"Test"');
  });
  test("multi line", () => {
    const text = <dq>Test<br />Test<br />Test</dq>;
    expect(text).toEqual('"Test\nTest\nTest"');
  });
});
