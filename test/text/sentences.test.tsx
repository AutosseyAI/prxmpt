import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("state", () => {
  const string = (
    <state>Hello</state>
  );
  expect(string).toEqual("Hello.");
});

test("ask", () => {
  const string = (
    <ask>Hello</ask>
  );
  expect(string).toEqual("Hello?");
});

test("exclaim", () => {
  const string = (
    <exclaim>Hello</exclaim>
  );
  expect(string).toEqual("Hello!");
});
