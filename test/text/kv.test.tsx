import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("kv", () => {
  test("single line", () => {
    const text = <kv key="Test">Body</kv>;
    expect(text).toEqual("Test: Body");
  });
  test("single line wrap", () => {
    const text = <kv key="Test" wrap>Body</kv>;
    expect(text).toEqual("Test:\nBody");
  });
  test("multi line", () => {
    const text = <kv key="Test">Body<br />Body</kv>;
    expect(text).toEqual("Test:\nBody\nBody");
  });
  test("multi line no wrap", () => {
    const text = <kv key="Test" wrap={false}>Body<br />Body</kv>;
    expect(text).toEqual("Test: Body\nBody");
  });
  test("key casing", () => {
    const text = <kv key="Test" keyCase="upper">Body</kv>;
    expect(text).toEqual("TEST: Body");
  });
  test("no space", () => {
    const text = <kv key="Test" noSpace>Body</kv>;
    expect(text).toEqual("Test:Body");
  });
  test("no space wrap", () => {
    const text = <kv key="Test" noSpace wrap>Body</kv>;
    expect(text).toEqual("Test:\nBody");
  });
});
