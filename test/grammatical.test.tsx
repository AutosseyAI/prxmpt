import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../source/index.js";

describe("grammatical", () => {
  test("adjective", () => {
    const text = <adjective form="superlative">fast</adjective>;
    assert.equal(text, "fastest");
  });

  test("noun", () => {
    const text = <noun plural>car</noun>
    assert(text === "cars");
  });

  test("sentence", () => {
    const text = <sentence tense="future">He went to the store.</sentence>
    assert.equal(text, "He will go to the store.");
  });

  test("verb", () => {
    const text = <verb form="gerund" negative>run</verb>
    assert.equal(text, "is not running");
  });
});


