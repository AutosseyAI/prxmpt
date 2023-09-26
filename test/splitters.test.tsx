import { expect, test } from "@jest/globals";
import Prxmpt, { chars, commas, lines, paragraphs, split, words } from "../source/index.js";

test("split none", () => {
  const test = (
    <text>This is a test</text>
  );
  const result = split(test);
  expect(result).toEqual(["This is a test"]);
});

test("chars", () => {
  const test = (
    <text>This is a test</text>
  );
  const result = chars(test);
  expect(result).toEqual("This is a test".split(""));
});

test("commas", () => {
  const test = (
    <text>This,is,a,test</text>
  );
  const result = commas(test);
  expect(result).toEqual(["This","is","a","test"]);
});

test("words", () => {
  const test = (
    <text>This is a test</text>
  );
  const result = words(test);
  expect(result).toEqual(["This","is","a","test"]);
});

test("lines", () => {
  const test = (
    <lined>
      <text>This</text>
      <text>is</text>
      <text>a</text>
      <text>test</text>
    </lined>
  );
  const result = lines(test);
  expect(result).toEqual(["This","is","a","test"]);
});

test("paragraphs", () => {
  const test = (
    <lined trim>
      <p>This</p>
      <p>is</p>
      <p>a</p>
      <p>test</p>
    </lined>
  );
  const result = paragraphs(test);
  expect(result).toEqual(["This","is","a","test"]);
});
