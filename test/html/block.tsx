import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("blockquote", () => {
  test("text", () => {
    const text = <blockquote>cool</blockquote>;
    assert.equal(text, "> cool\n");
  });
  test("html", () => {
    const text = <blockquote html>cool</blockquote>;
    assert.equal(text, "<blockquote>cool</blockquote>\n");
  });
});

describe("div", () => {
  test("text", () => {
    const text = <div>cool</div>;
    assert.equal(text, "---\ncool\n---\n");
  });
  test("html", () => {
    const text = <div html>cool</div>;
    assert.equal(text, "<div>cool</div>\n");
  });
  test("html multi line", () => {
    const text = <div html>cool<br />test</div>;
    assert.equal(text, "<div>\n  cool\n  test\n</div>\n");
  });
});
