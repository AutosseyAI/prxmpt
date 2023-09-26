import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("text", () => {
  const text = <p>Test</p>;
  expect(text).toEqual("Test\n");
});

test("html", () => {
  const text = <p html>Test</p>;
  expect(text).toEqual("<p>Test</p>");
});
