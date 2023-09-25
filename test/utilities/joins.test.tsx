import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("spaced", () => {
  test("default", () => {
    const string = (
      <spaced>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </spaced>
    );
    expect(string).toEqual("one two three");
  });
});

describe("csl", () => {
  test("default", () => {
    const string = (
      <csl>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </csl>
    );
    expect(string).toEqual("one, two, three");
  });
  test("noSpace", () => {
    const string = (
      <csl noSpace>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </csl>
    );
    expect(string).toEqual("one,two,three");
  });
});

describe("union", () => {
  test("default", () => {
    const string = (
      <union>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </union>
    );
    expect(string).toEqual("one | two | three");
  });
  test("noSpace", () => {
    const string = (
      <union noSpace>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </union>
    );
    expect(string).toEqual("one|two|three");
  });
});

describe("lined", () => {
  test("basic", () => {
    const string = (
      <lined>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </lined>
    );
    expect(string).toEqual("one\ntwo\nthree");
  });
  test("frame", () => {
    const string = (
      <lined height={2}>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </lined>
    );
    expect(string).toEqual("one\n\ntwo\n\nthree");
  });
});

describe("sectioned", () => {
  test("basic", () => {
    const string = (
      <sectioned>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </sectioned>
    );
    expect(string).toEqual("one\n---\ntwo\n---\nthree");
  });
  test("frame", () => {
    const string = (
      <sectioned frame>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </sectioned>
    );
    expect(string).toEqual("---\none\n---\ntwo\n---\nthree\n---");
  });
});
