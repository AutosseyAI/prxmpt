import { describe, expect, test } from "@jest/globals";
import Prxmpt, { chars, commas, lines, paragraphs, spaces, split, words } from "../source/index.js";

test("split none", () => {
  const string = (
    <text>This is a test</text>
  );
  const result = split(string);
  expect(result).toEqual(["This is a test"]);
});

test("chars", () => {
  const string = (
    <text>This is a test</text>
  );
  const result = chars(string);
  expect(result).toEqual("This is a test".split(""));
});

describe("commas", () => {
  test("remove separators", () => {
    const string = (
      <text>This,is,a,test</text>
    );
    const result = commas(string);
    expect(result).toEqual(["This", "is", "a", "test"]);
  });
  test("retain separators", () => {
    const string = (
      <text>This,is,a,test</text>
    );
    const result = commas(string, { retainSeparator: true });
    expect(result).toEqual(["This,", "is,", "a,", "test"]);
  });
});

describe("spaces", () => {
  test("remove separators", () => {
    const string = (
      <text>This   is<br /><br />a test </text>
    );
    const result = spaces(string);
    expect(result).toEqual(["This", "is", "a", "test"]);
  });
  test("retain separators", () => {
    const string = (
      <text>This   is<br /><br />a test </text>
    );
    const result = spaces(string, { retainSeparator: true });
    expect(result).toEqual(["This   ", "is\n\n", "a ", "test "]);
  });
});

describe("words", () => {
  test("remove separators", () => {
    const string = (
      <text>This   is<br /><br />a test.</text>
    );
    const result = words(string);
    expect(result).toEqual(["This", "is", "a", "test"]);
  });
  test("retain separators", () => {
    const string = (
      <text>This   is<br /><br />a test.</text>
    );
    const result = words(string, { retainSeparator: true });
    expect(result).toEqual(["This   ", "is\n\n", "a ", "test."]);
  });
});

describe("lines", () => {
  test("remove separators", () => {
    const string = (
      <lined>
        <text>This</text>
        <text>is</text>
        <text>a</text>
        <text>test</text>
      </lined>
    );
    const result = lines(string);
    expect(result).toEqual(["This", "is", "a", "test"]);
  });
  test("retain separators", () => {
    const string = (
      <lined>
        <text>This</text>
        <text>is</text>
        <text>a</text>
        <text>test</text>
      </lined>
    );
    const result = lines(string, { retainSeparator: true });
    expect(result).toEqual(["This\n", "is\n", "a\n", "test"]);
  });
});

describe("paragraphs", () => {
  test("remove separators", () => {
    const string = (
      <lined trim>
        <p>This</p>
        <p>is</p>
        <p>a</p>
        <p>test</p>
      </lined>
    );
    const result = paragraphs(string);
    expect(result).toEqual(["This", "is", "a", "test"]);
  });
  test("retain separators", () => {
    const string = (
      <lined trim>
        <p>This</p>
        <p>is</p>
        <p>a</p>
        <p>test</p>
      </lined>
    );
    const result = paragraphs(string, { retainSeparator: true });
    expect(result).toEqual(["This\n\n", "is\n\n", "a\n\n", "test"]);
  });
});
