import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("hide", () => {
  test("true", () => {
    const string = <text hide>Test</text>;
    expect(string).toEqual(undefined);
  });
  test("false", () => {
    const string = <text hide={false}>Test</text>;
    expect(string).toEqual("Test");
  });
  test("children", () => {
    const string = (
      <lined>
        <text hide>Test 1</text>
        <text>Test 2</text>
        <text hide>Test 3</text>
      </lined>
    );
    expect(string).toEqual("Test 2");
  });
});

describe("filter", () => {
  test("simple", () => {
    const string = (
      <text
        filter={(child) => Prxmpt.render(child).includes("1")}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    expect(string).toEqual("Test 1");
  });
});

describe("map", () => {
  test("simple", () => {
    const string = (
      <text
        map={(child) => Prxmpt.render(child).slice(0, -2)}>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </text>
    );
    expect(string).toEqual("TestTestTest");
  });
});

describe("reverse", () => {
  test("simple", () => {
    const children = [
      <text>Test 1</text>,
      <text>Test 2</text>,
      <text>Test 3</text>
    ];
    const string = (
      <text children={children} reverse />
    );
    expect(string).toEqual("Test 3Test 2Test 1");
    expect(children[0]).toEqual("Test 1");
  });
});

describe("join", () => {
  test("newline", () => {
    const string = (
      <lined>
        <text>Test 1</text>
        <text>Test 2</text>
        <text>Test 3</text>
      </lined>
    );
    expect(string).toEqual("Test 1\nTest 2\nTest 3");
  });
});

describe("repeat", () => {
  test("newline", () => {
    const string = (
      <text repeat={3}>Test</text>
    );
    expect(string).toEqual("TestTestTest");
  });
});

describe("trim", () => {
  test("true", () => {
    const string = (
      <text trim> Test </text>
    );
    expect(string).toEqual("Test");
  });
  test("start", () => {
    const string = (
      <text trim="start"> Test </text>
    );
    expect(string).toEqual("Test ");
  });
  test("end", () => {
    const string = (
      <text trim="end"> Test </text>
    );
    expect(string).toEqual(" Test");
  });
});

describe("case", () => {
  test("upper", () => {
    const string = <text casing="upper">Test</text>;
    expect(string).toEqual("TEST");
  });
  test("lower", () => {
    const string = <text casing="lower">Test</text>;
    expect(string).toEqual("test");
  });
  test("capital", () => {
    const string = <text casing="capital">test test test</text>;
    expect(string).toEqual("Test test test");
  });
  test("title", () => {
    const string = <text casing="title">test test test</text>;
    expect(string).toEqual("Test Test Test");
  });
});

describe("prefix", () => {
  test("simple", () => {
    const string = <text prefix="Prefix">Test</text>;
    expect(string).toEqual("PrefixTest");
  });
});

describe("suffix", () => {
  test("simple", () => {
    const string = <text suffix="Suffix">Test</text>;
    expect(string).toEqual("TestSuffix");
  });
});

describe("indent", () => {
  test("true", () => {
    const string = <text indent>Test</text>;
    expect(string).toEqual("  Test");
  });
  test("false", () => {
    const string = <text indent={false}>Test</text>;
    expect(string).toEqual("Test");
  });
  test("number", () => {
    const string = <text indent={4}>Test</text>;
    expect(string).toEqual("    Test");
  });
  test("tab", () => {
    const string = <text indent={"\t"}>Test</text>;
    expect(string).toEqual("\tTest");
  });
  test("with empty lines", () => {
    const string = (
      <lined indent>
        <text>Line 1</text>
        <empty />
        <text>Line 2</text>
      </lined>
    );
    expect(string).toEqual("  Line 1\n\n  Line 2");
  });
});

describe("block", () => {
  test("true", () => {
    const string = <text block>Test</text>;
    expect(string).toEqual("Test\n");
  });
  test("false", () => {
    const string = <text block={false}>Test</text>;
    expect(string).toEqual("Test");
  });
});


