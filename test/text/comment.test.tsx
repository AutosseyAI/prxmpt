import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("slash", () => {
  test("single line", () => {
    const text = <comment type="slash">Test</comment>;
    assert.equal(text, "// Test");
  });
  test("multi line", () => {
    const text = <comment type="slash">Test<br/>Test<br/>Test</comment>;
    assert.equal(text, "// Test\n// Test\n// Test");
  });
});

describe("dash", () => {
  test("single line", () => {
    const text = <comment type="dash">Test</comment>;
    assert.equal(text, "-- Test");
  });
  test("multi line", () => {
    const text = <comment type="dash">Test<br/>Test<br/>Test</comment>;
    assert.equal(text, "-- Test\n-- Test\n-- Test");
  });
});

describe("hash", () => {
  test("single line", () => {
    const text = <comment type="hash">Test</comment>;
    assert.equal(text, "# Test");
  });
  test("multi line", () => {
    const text = <comment type="hash">Test<br/>Test<br/>Test</comment>;
    assert.equal(text, "# Test\n# Test\n# Test");
  });
});

describe("hash", () => {
  test("single line", () => {
    const text = <comment type="html">Test</comment>;
    assert.equal(text, "<!-- Test -->");
  });
  test("multi line", () => {
    const text = <comment type="html">Test<br/>Test<br/>Test</comment>;
    assert.equal(text, "<!--\nTest\nTest\nTest\n-->");
  });
});
