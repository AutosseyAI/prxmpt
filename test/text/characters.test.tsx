import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("empty", () => {
  test("simple", () => {
    const text = <empty />;
    expect(text).toEqual("");
  });
  test("hidden", () => {
    const text = <empty hide />;
    expect(text).toEqual(undefined);
  });
});

describe("space", () => {
  test("simple", () => {
    const text = <space />;
    expect(text).toEqual(" ");
  });
  test("hide", () => {
    const text = <space hide />;
    expect(text).toEqual(undefined);
  });
});

describe("tab", () => {
  test("simple", () => {
    const text = <tab />;
    expect(text).toEqual("  ");
  });
  test("width", () => {
    const text = <tab width={4} />;
    expect(text).toEqual("    ");
  });
  test("literal", () => {
    const text = <tab literal />;
    expect(text).toEqual("\t");
  });
});

describe("ellipsis", () => {
  test("simple", () => {
    const text = <ellipsis />;
    expect(text).toEqual("...");
  });
});

describe("na", () => {
  test("simple", () => {
    const text = <na />;
    expect(text).toEqual("n/a");
  });
  test("upper", () => {
    const text = <na casing="upper" />;
    expect(text).toEqual("N/A");
  });
});
