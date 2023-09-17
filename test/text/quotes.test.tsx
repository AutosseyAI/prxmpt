import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("sq", () => {
  test("escape", () => {
    const text = <sq>Test'ing</sq>;
    assert.equal(text, "'Test\\'ing'");
  });
  test("no escape", () => {
    const text = <sq noEscape>Test'ing</sq>;
    assert.equal(text, "'Test'ing'");
  });
})

describe("dq", () => {
  test("single line", () => {
    const text = <dq>Test</dq>;
    assert.equal(text, '"Test"');
  });
  test("multi line", () => {
    const text = <dq>Test<br />Test<br />Test</dq>;
    assert.equal(text, '"Test\nTest\nTest"');
  });
});
