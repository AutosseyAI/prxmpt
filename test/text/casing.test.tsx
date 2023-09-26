import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("upper", () => {
  const text = <upper>Hello, World!</upper>;
  expect(text).toEqual("HELLO, WORLD!");
});

test("lower", () => {
  const text = <lower>Hello, World!</lower>;
  expect(text).toEqual("hello, world!");
});

test("capital", () => {
  const text = <capital>hello, world!</capital>;
  expect(text).toEqual("Hello, world!");
});

test("title", () => {
  const text = <title>hello, world!</title>;
  expect(text).toEqual("Hello, World!");
});
