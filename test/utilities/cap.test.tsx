import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("max", () => {
  test("hide", () => {
    const text = (
      <cap join={"\n"} hide>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toBeUndefined();
  });
  test("undefined", () => {
    const text = (
      <cap join={"\n"}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1\nTest 2\nTest 3\nTest 4\nTest 5");
  });
  test("defined", () => {
    const text = (
      <cap max={15} join={"\n"}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1\nTest 2\nT");
  });
  test("exact", () => {
    const text = (
      <cap max={12}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1Test 2");
  });
  test("prefix", () => {
    const text = (
      <cap max={12} join={"\n"} prefix="-">
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("-Test 1\nTest");
  });
  test("suffix", () => {
    const text = (
      <cap max={12} join={"\n"} suffix="-">
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1\nTest-");
  });
  test("block", () => {
    const text = (
      <cap max={12} join={"\n"} block>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1\nTest\n");
  });
  test("repeat", () => {
    const text = (
      <cap max={13} join={"\n"} repeat={2}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1\nTest 2");
  });
});

describe("splitter", () => {
  test("spaces", () => {
    const text = (
      <cap join={" "} max={4} splitter="spaces" trim>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1 Test 2");
  });
  test("custom", () => {
    const text = (
      <cap join={" "} max={4} splitter={(string) => string.split(/(?<=[tT])/g)}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1 Test");
  });
});

describe("ellipsis", () => {
  test("no max", () => {
    const text = (
      <cap ellipsis>
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>55555</text>
      </cap>
    );
    expect(text).toEqual("122333444455555");
  });
  test("max exact", () => {
    const text = (
      <cap ellipsis="..." max={10}>
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>55555</text>
      </cap>
    );
    expect(text).toEqual("1223334...");
  });
  test("max exact", () => {
    const text = (
      <cap ellipsis="..." max={9}>
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>55555</text>
      </cap>
    );
    expect(text).toEqual("122333...");
  });
});
