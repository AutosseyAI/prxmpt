import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../source/index.js";

describe("block", () => {
  test("list", () => {
    const text = <list each={(child) => <upper>{child}</upper>}>cool{"test"}</list>;
    assert.equal(text, "COOL\nTEST\n");
  });
  test("lined", () => {
    const text = <lined>cool{"test"}</lined>;
    assert.equal(text, "cool\ntest\n");
  });
  test("sectioned", () => {
    const text = <sectioned>cool{"test"}last</sectioned>;
    assert.equal(text, "cool\n---\ntest\n---\nlast\n");
  });
});


describe("inline", () => {
  describe("delimited", () => {
    describe("commaed", () => {
      test("space", () => {
        const text = <commaed>cool{"test"}</commaed>;
        assert.equal(text, "cool, test");
      });
      test("no space", () => {
        const text = <commaed noSpace>cool{"test"}</commaed>;
        assert.equal(text, "cool,test");
      });
    });
    test("spaced", () => {
      const text = <spaced>cool{"test"}</spaced>;
      assert.equal(text, "cool test");
    });
    describe("union", () => {
      test("space", () => {
        const text = <union>cool{"test"}</union>;
        assert.equal(text, "cool | test");
      });
      test("no space", () => {
        const text = <union noSpace>cool{"test"}</union>;
        assert.equal(text, "cool|test");
      });
    });
  });
  describe("sets", () => {
    describe("set", () => {
      test("none", () => {
        const test = <set conjunction="-">{[]}</set>
        assert.equal(test, "");
      });
      test("one", () => {
        const test = <set conjunction="-">{["one"]}</set>
        assert.equal(test, "one");
      });
      test("two", () => {
        const test = <set conjunction="-">{["one", "two"]}</set>
        assert.equal(test, "one - two");
      });
      test("three", () => {
        const test = <set conjunction="-">{["one", "two", "three"]}</set>
        assert.equal(test, "one, two, - three");
      });
      test("no oxford comma", () => {
        const test = <set conjunction="-" noOxfordComma>{["one", "two", "three"]}</set>
        assert.equal(test, "one, two - three");
      });
    });
    describe("conjunctions", () => {
      test("and", () => {
        const text = <and>{["one", "two", "three"]}</and>;
        assert.equal(text, "one, two, and three");
      });
      test("or", () => {
        const text = <or>{["one", "two", "three"]}</or>;
        assert.equal(text, "one, two, or three");
      });
      test("and/or", () => {
        const text = <andor>{["one", "two", "three"]}</andor>;
        assert.equal(text, "one, two, and/or three");
      });
      test("nor", () => {
        const text = <nor>{["one", "two", "three"]}</nor>;
        assert.equal(text, "one, two, nor three");
      });
    });
  });
});
