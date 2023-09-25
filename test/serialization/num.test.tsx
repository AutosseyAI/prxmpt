import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("basic", () => {
  const string = (
    <num>1</num>
  );
  expect(string).toEqual("1");
});

test("add", () => {
  const string = (
    <num add={1}>1</num>
  );
  expect(string).toEqual("2");
});

test("sub", () => {
  const string = (
    <num add={-1}>1</num>
  );
  expect(string).toEqual("0");
});

test("max add", () => {
  const string = (
    <num add={2} max={2}>1</num>
  );
  expect(string).toEqual("2");
});

test("min", () => {
  const string = (
    <num add={1} min={3}>1</num>
  );
  expect(string).toEqual("3");
});

test("fixed", () => {
  const string = (
    <num fixed={2}>1</num>
  );
  expect(string).toEqual("1.00");
});

test("NaN", () => {
  const string = (
    <num>{NaN}</num>
  );
  expect(string).toEqual("NaN");
});

