import assert from "node:assert";
import { describe, test } from "node:test";
import * as Prxmpt from "../../source/index.js";

describe("hide", () => {
  test("true", () => {
    const text = <text hide>Test</text>;
    assert.equal(text, undefined);
  });
  test("false", () => {
    const text = <text hide={false}>Test</text>;
    assert.equal(text, "Test");
  });
  test("children", () => {
    const test = (
      <lined>
        <text hide>Test 1</text>
        <text>Test 2</text>
        <text hide>Test 3</text>
      </lined>
    );
    assert.equal(test, "Test 2");
  });
});

describe("filter", () => {
  test("simple", () => {
    const test = (
      <text
        filter={(child) => Prxmpt.render(child).includes("1")}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    assert.equal(test, "Test 1");
  });
});

describe("map", () => {
  test("simple", () => {
    const test = (
      <text
        map={(child) => Prxmpt.render(child).slice(0, -2)}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    assert.equal(test, "TestTestTest");
  });
});

describe("reverse", () => {
  test("simple", () => {
    const children = [
      <text>Test 1</text>,
      <text>Test 2</text>,
      <text>Test 3</text>
    ];
    const test = (
      <text children={children} reverse />
    );
    assert.equal(test, "Test 3Test 2Test 1");
    assert.equal(children[0], "Test 1");
  });
});

describe("join", () => {
  test("newline", () => {
    const test = (
      <lined>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </lined>
    );
    assert.equal(test, "Test 1\nTest 2\nTest 3");
  });
});

describe("repeat", () => {
  test("newline", () => {
    const test = (
      <text repeat={3}>Test</text>
    );
    assert.equal(test, "TestTestTest");
  });
});

describe("case", () => {
  test("upper", () => {
    const text = <text casing="upper">Test</text>;
    assert.equal(text, "TEST");
  });
  test("lower", () => {
    const text = <text casing="lower">Test</text>;
    assert.equal(text, "test");
  });
  test("capital", () => {
    const text = <text casing="capital">test test test</text>;
    assert.equal(text, "Test test test");
  });
  test("title", () => {
    const text = <text casing="title">test test test</text>;
    assert.equal(text, "Test Test Test");
  });
});

describe("prefix", () => {
  test("simple", () => {
    const text = <text prefix="Prefix">Test</text>;
    assert.equal(text, "PrefixTest");
  });
});

describe("suffix", () => {
  test("simple", () => {
    const text = <text suffix="Suffix">Test</text>;
    assert.equal(text, "TestSuffix");
  });
});

describe("indent", () => {
  test("true", () => {
    const text = <text indent>Test</text>;
    assert.equal(text, "  Test");
  });
  test("false", () => {
    const text = <text indent={false}>Test</text>;
    assert.equal(text, "Test");
  });
  test("number", () => {
    const text = <text indent={4}>Test</text>;
    assert.equal(text, "    Test");
  });
  test("tab", () => {
    const text = <text indent={"\t"}>Test</text>;
    assert.equal(text, "\tTest");
  });
});

describe("block", () => {
  test("true", () => {
    const text = <text block>Test</text>;
    assert.equal(text, "Test\n");
  });
  test("false", () => {
    const text = <text block={false}>Test</text>;
    assert.equal(text, "Test");
  });
});



