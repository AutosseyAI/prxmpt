import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("slash", () => {
  test("single line", () => {
    const text = <comment type="slash">Test</comment>;
    expect(text).toEqual("// Test");
  });
  test("multi line", () => {
    const text = <comment type="slash">Test<br />Test<br />Test</comment>;
    expect(text).toEqual("// Test\n// Test\n// Test");
  });
});

describe("dash", () => {
  test("single line", () => {
    const text = <comment type="dash">Test</comment>;
    expect(text).toEqual("-- Test");
  });
  test("multi line", () => {
    const text = <comment type="dash">Test<br />Test<br />Test</comment>;
    expect(text).toEqual("-- Test\n-- Test\n-- Test");
  });
});

describe("hash", () => {
  test("single line", () => {
    const text = <comment type="hash">Test</comment>;
    expect(text).toEqual("# Test");
  });
  test("multi line", () => {
    const text = <comment type="hash">Test<br />Test<br />Test</comment>;
    expect(text).toEqual("# Test\n# Test\n# Test");
  });
});

describe("hash", () => {
  test("single line", () => {
    const text = <comment type="html">Test</comment>;
    expect(text).toEqual("<!-- Test -->");
  });
  test("multi line", () => {
    const text = <comment type="html">Test<br />Test<br />Test</comment>;
    expect(text).toEqual("<!--\nTest\nTest\nTest\n-->");
  });
});
