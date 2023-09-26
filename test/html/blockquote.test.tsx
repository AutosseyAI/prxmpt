import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("text", () => {
  test("single line", () => {
    const text = <blockquote>Test</blockquote>;
    expect(text).toEqual("> Test");
  });
  test("multi line", () => {
    const text = (
      <blockquote>
        <lined>
          <text>Test</text>
          <text>Test</text>
          <text>Test</text>
        </lined>
      </blockquote>
    );
    expect(text).toEqual("> Test\n> Test\n> Test");
  });
});

describe("html", () => {
  test("single line", () => {
    const text = <blockquote html>Test</blockquote>;
    expect(text).toEqual("<blockquote>Test</blockquote>");
  });
  test("multi line html", () => {
    const text = (
      <blockquote html>
        <lined>
          <text>Test</text>
          <text>Test</text>
          <text>Test</text>
        </lined>
      </blockquote>
    );
    expect(text).toEqual("<blockquote>\n  Test\n  Test\n  Test\n</blockquote>");
  });
});

