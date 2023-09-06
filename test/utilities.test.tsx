import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../source/index.js";

describe("utilities", () => {
  describe("array returning", () => {
    test("map", () => {
      const output = <map>{"one"}{"two"}{undefined}{"four"}</map>;
      assert.deepEqual(output, ["one", "two", "four"]);
    });

    test("split", () => {
      const output = <split on={" "}>{"one two three"}</split>;
      assert.deepEqual(output, ["one", "two", "three"]);
    });
  });

  describe("string returning", () => {
    test("bracket", () => {
      const text = <bracket prefix={"<"} suffix={">"}>cool</bracket>;
      assert.equal(text, "<cool>");
    });

    describe("frame", () => {
      test("inline", () => {
        const text = <frame with={"-"}>cool</frame>;
        assert.equal(text, "-cool-");
      });
      test("block", () => {
        const text = <frame with={"-"} block>cool</frame>;
        assert.equal(text, "-cool-\n");
      });
    });

    test("join", () => {
      const text = <join with={"-"}>{"cool"}{"cool"}{undefined}</join>;
      assert.equal(text, "cool-cool");
    });

    test("list", () => {
      const text = <list each={(child) => <upper>{child}</upper>}>cool{"test"}</list>;
      assert.equal(text, "COOL\nTEST\n");
    });

    test("repeat", () => {
      const text = <repeat count={0}>cool</repeat>;
      assert.equal(text, "");
    });

    test("double", () => {
      const text = <double>cool</double>;
      assert.equal(text, "coolcool");
    });

    test("triple", () => {
      const text = <triple>cool</triple>;
      assert.equal(text, "coolcoolcool");
    });

    test("trim", () => {
      const text = <trim>{"cool\n"}</trim>;
      assert.equal(text, "cool");
    });

    test("truncate", () => {
      const text = <truncate max={20}>This is a longer sentence so I don't want to display the full thing.</truncate>;
      assert.equal(text, "This is a longer...");
    });
  });
});


