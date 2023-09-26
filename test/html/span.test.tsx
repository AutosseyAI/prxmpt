import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("text", () => {
  const text = <span>Test</span>;
  expect(text).toEqual("Test");
});

test("html", () => {
  const text = <span html>Test</span>;
  expect(text).toEqual("<span>Test</span>");
});
