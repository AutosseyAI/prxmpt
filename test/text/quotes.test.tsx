import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("sq", () => {
  test("escape", () => {
    const text = <sq>Test'ing</sq>;
    expect(text).toEqual("'Test\\'ing'");
  });
  test("no escape", () => {
    const text = <sq noEscape>Test'ing</sq>;
    expect(text).toEqual("'Test'ing'");
  });
});

describe("dq", () => {
  test("single line", () => {
    const text = <dq>Test</dq>;
    expect(text).toEqual('"Test"');
  });
  test("escape", () => {
    const text = <dq>Te"st</dq>;
    expect(text).toEqual('"Te\\"st"');
  });
  test("no escape", () => {
    const text = <dq noEscape>Te"st</dq>;
    expect(text).toEqual('"Te"st"');
  });
  test("multi line", () => {
    const text = <dq>Test<br />Test<br />Test</dq>;
    expect(text).toEqual('"Test\nTest\nTest"');
  });
});

describe("bq", () => {
  test("single line", () => {
    const text = <bq>Test</bq>;
    expect(text).toEqual("`Test`");
  });
  test("escape", () => {
    const text = <bq>Te`st</bq>;
    expect(text).toEqual("`Te\\`st`");
  });
  test("no escape", () => {
    const text = <bq noEscape>Te`st</bq>;
    expect(text).toEqual("`Te`st`");
  });
  test("multi line", () => {
    const text = <bq>Test<br />Test<br />Test</bq>;
    expect(text).toEqual("`Test\nTest\nTest`");
  });
});

describe("tq", () => {
  test("noStartingNewline", () => {
    const string = (
      <tq noStartingNewline>Test</tq>
    );
    expect(string).toEqual('"""Test\n"""');
  });
  test("noEndingNewline", () => {
    const string = (
      <tq noEndingNewline>Test</tq>
    );
    expect(string).toEqual('"""\nTest"""');
  });
});

describe("tsq", () => {
  test("single line", () => {
    const text = <tsq>Test</tsq>;
    expect(text).toEqual("'''\nTest\n'''");
  });
  test("multi line", () => {
    const text = <tsq>Test<br />Test<br />Test</tsq>;
    expect(text).toEqual("'''\nTest\nTest\nTest\n'''");
  });
});

describe("tdq", () => {
  test("single line", () => {
    const text = <tdq>Test</tdq>;
    expect(text).toEqual('"""\nTest\n"""');
  });
  test("multi line", () => {
    const text = <tdq>Test<br />Test<br />Test</tdq>;
    expect(text).toEqual('"""\nTest\nTest\nTest\n"""');
  });
});

describe("tbq", () => {
  test("single line", () => {
    const text = <tbq>Test</tbq>;
    expect(text).toEqual("```\nTest\n```");
  });
  test("multi line", () => {
    const text = <tbq>Test<br />Test<br />Test</tbq>;
    expect(text).toEqual("```\nTest\nTest\nTest\n```");
  });
});
