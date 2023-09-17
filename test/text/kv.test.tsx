import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("kv", () => {
  test("single line", () => {
    const text = <kv key="Test">Body</kv>
    assert.equal(text, "Test: Body");
  });
  test("single line wrap", () => {
    const text = <kv key="Test" wrap>Body</kv>
    assert.equal(text, "Test:\nBody");
  });
  test("multi line", () => {
    const text = <kv key="Test">Body<br />Body</kv>
    assert.equal(text, "Test:\nBody\nBody");
  });
  test("multi line no wrap", () => {
    const text = <kv key="Test" wrap={false}>Body<br />Body</kv>
    assert.equal(text, "Test: Body\nBody");
  });
  test("key casing", () => {
    const text = <kv key="Test" keyCase="upper">Body</kv>
    assert.equal(text, "TEST: Body");
  });
  test("no space", () => {
    const text = <kv key="Test" noSpace>Body</kv>
    assert.equal(text, "Test:Body");
  });
  test("no space wrap", () => {
    const text = <kv key="Test" noSpace wrap>Body</kv>
    assert.equal(text, "Test:\nBody");
  });
});
