import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("hide", () => {
  test("true", () => {
    const text = <text hide>Test</text>;
    expect(text).toEqual(undefined);
  });
  test("false", () => {
    const text = <text hide={false}>Test</text>;
    expect(text).toEqual("Test");
  });
  test("children", () => {
    const text = (
      <lined>
        <text hide>Test 1</text>
        <text>Test 2</text>
        <text hide>Test 3</text>
      </lined>
    );
    expect(text).toEqual("Test 2");
  });
});

describe("filter", () => {
  test("simple", () => {
    const text = (
      <text
        filter={(child) => Prxmpt.render(child).includes("1")}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    expect(text).toEqual("Test 1");
  });
});

describe("map", () => {
  test("simple", () => {
    const text = (
      <text
        map={(child) => Prxmpt.render(child).slice(0, -2)}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    expect(text).toEqual("TestTestTest");
  });
});

describe("reverse", () => {
  test("simple", () => {
    const children = [
      <text>Test 1</text>,
      <text>Test 2</text>,
      <text>Test 3</text>
    ];
    const text = (
      <text children={children} reverse />
    );
    expect(text).toEqual("Test 3Test 2Test 1");
    expect(children[0]).toEqual("Test 1");
  });
});

describe("join", () => {
  test("newline", () => {
    const text = (
      <lined>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </lined>
    );
    expect(text).toEqual("Test 1\nTest 2\nTest 3");
  });
});

describe("repeat", () => {
  test("newline", () => {
    const text = (
      <text repeat={3}>Test</text>
    );
    expect(text).toEqual("TestTestTest");
  });
});

describe("case", () => {
  test("upper", () => {
    const text = <text casing="upper">Test</text>;
    expect(text).toEqual("TEST");
  });
  test("lower", () => {
    const text = <text casing="lower">Test</text>;
    expect(text).toEqual("test");
  });
  test("capital", () => {
    const text = <text casing="capital">test test test</text>;
    expect(text).toEqual("Test test test");
  });
  test("title", () => {
    const text = <text casing="title">test test test</text>;
    expect(text).toEqual("Test Test Test");
  });
});

describe("prefix", () => {
  test("simple", () => {
    const text = <text prefix="Prefix">Test</text>;
    expect(text).toEqual("PrefixTest");
  });
});

describe("suffix", () => {
  test("simple", () => {
    const text = <text suffix="Suffix">Test</text>;
    expect(text).toEqual("TestSuffix");
  });
});

describe("indent", () => {
  test("true", () => {
    const text = <text indent>Test</text>;
    expect(text).toEqual("  Test");
  });
  test("false", () => {
    const text = <text indent={false}>Test</text>;
    expect(text).toEqual("Test");
  });
  test("number", () => {
    const text = <text indent={4}>Test</text>;
    expect(text).toEqual("    Test");
  });
  test("tab", () => {
    const text = <text indent={"\t"}>Test</text>;
    expect(text).toEqual("\tTest");
  });
});

describe("block", () => {
  test("true", () => {
    const text = <text block>Test</text>;
    expect(text).toEqual("Test\n");
  });
  test("false", () => {
    const text = <text block={false}>Test</text>;
    expect(text).toEqual("Test");
  });
});


