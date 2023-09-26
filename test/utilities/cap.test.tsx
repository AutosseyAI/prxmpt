import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("max", () => {
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
    expect(text).toEqual("Test 1\nTest 2");
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
    expect(text).toEqual("Test 1\n");
  });
  test("repeat", () => {
    const text = (
      <cap max={12} join={"\n"} repeat={2}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1Test 1");
  });
  test("exact w/join", () => {
    const text = (
      <cap max={12} join={"\n"}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
        <text>Test 4</text>
        <text>Test 5</text>
      </cap>
    );
    expect(text).toEqual("Test 1");
  });
});

describe("counter", () => {
  test("4-char", () => {
    const text = (
      <cap join={"\n"} max={4} counter={(string) => string.length / 4}>
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

describe("strategies", () => {
  test("ordered", () => {
    const text = (
      <cap max={5} strategy="ordered">
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>5</text>
      </cap>
    );
    expect(text).toEqual("1225");
  });
  test("ordered-no-skip", () => {
    const text = (
      <cap max={5} strategy="ordered-no-skip">
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>5</text>
      </cap>
    );
    expect(text).toEqual("122");
  });
  test("size-asc", () => {
    const text = (
      <cap max={5} strategy="size-asc">
        <text>1</text>
        <text>2222</text>
        <text>333</text>
        <text>4444</text>
        <text>5</text>
      </cap>
    );
    expect(text).toEqual("13335");
  });
  test("size-desc", () => {
    const text = (
      <cap max={5} strategy="size-desc">
        <text>1</text>
        <text>2222</text>
        <text>333</text>
        <text>4444</text>
        <text>5</text>
      </cap>
    );
    expect(text).toEqual("12222");
  });
});

describe("ellipsis", () => {
  test("no max", () => {
    const text = (
      <cap ellipsis="...">
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
    expect(text).toEqual("122333...");
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
  test("add more after filter", () => {
    const text = (
      <cap ellipsis="..." max={9}>
        <text>1</text>
        <text>22</text>
        <text>333</text>
        <text>4444</text>
        <text>5</text>
      </cap>
    );
    expect(text).toEqual("1223335...");
  });
});
