import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("empty", () => {
  test("simple", () => {
    const text = <empty />;
    assert.equal(text, "");
  });
  test("hidden", () => {
    const text = <empty hide />;
    assert.equal(text, undefined);
  });
});

describe("space", () => {
  test("simple", () => {
    const text = <space />;
    assert.equal(text, " ");
  });
  test("hide", () => {
    const text = <space hide />;
    assert.equal(text, undefined);
  });
});

describe("tab", () => {
  test("simple", () => {
    const text = <tab />;
    assert.equal(text, "  ");
  });
  test("width", () => {
    const text = <tab width={4} />;
    assert.equal(text, "    ");
  });
  test("literal", () => {
    const text = <tab literal />;
    assert.equal(text, "\t");
  });
});

describe("ellipsis", () => {
  test("simple", () => {
    const text = <ellipsis />;
    assert.equal(text, "...");
  });
});

describe("na", () => {
  test("simple", () => {
    const text = <na />;
    assert.equal(text, "n/a");
  });
  test("upper", () => {
    const text = <na casing="upper" />;
    assert.equal(text, "N/A");
  });
});
