import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("text", () => {
  const text = <pre>Test</pre>;
  expect(text).toEqual("```\nTest\n```");
});

test("title", () => {
  const text = <pre title="Title">Test</pre>;
  expect(text).toEqual("Title:\n```\nTest\n```");
});

test("html", () => {
  const text = <pre html>Test</pre>;
  expect(text).toEqual("<pre>Test</pre>");
});
