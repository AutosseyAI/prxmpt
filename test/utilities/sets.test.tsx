import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("and", () => {
  test("1 item", () => {
    const string = (
      <and>
        <text>one</text>
      </and>
    );
    expect(string).toEqual("one");
  });
  test("2 items", () => {
    const string = (
      <and>
        <text>one</text>
        <text>two</text>
      </and>
    );
    expect(string).toEqual("one and two");
  });
  test("3 items", () => {
    const string = (
      <and>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </and>
    );
    expect(string).toEqual("one, two, and three");
  });
});


describe("andor", () => {
  test("1 item", () => {
    const string = (
      <andor>
        <text>one</text>
      </andor>
    );
    expect(string).toEqual("one");
  });
  test("2 items", () => {
    const string = (
      <andor>
        <text>one</text>
        <text>two</text>
      </andor>
    );
    expect(string).toEqual("one and/or two");
  });
  test("3 items", () => {
    const string = (
      <andor>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </andor>
    );
    expect(string).toEqual("one, two, and/or three");
  });
});


describe("or", () => {
  test("1 item", () => {
    const string = (
      <or>
        <text>one</text>
      </or>
    );
    expect(string).toEqual("one");
  });
  test("2 items", () => {
    const string = (
      <or>
        <text>one</text>
        <text>two</text>
      </or>
    );
    expect(string).toEqual("one or two");
  });
  test("3 items", () => {
    const string = (
      <or>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </or>
    );
    expect(string).toEqual("one, two, or three");
  });
});


describe("nor", () => {
  test("1 item", () => {
    const string = (
      <nor>
        <text>one</text>
      </nor>
    );
    expect(string).toEqual("one");
  });
  test("2 items", () => {
    const string = (
      <nor>
        <text>one</text>
        <text>two</text>
      </nor>
    );
    expect(string).toEqual("one nor two");
  });
  test("3 items", () => {
    const string = (
      <nor>
        <text>one</text>
        <text>two</text>
        <text>three</text>
      </nor>
    );
    expect(string).toEqual("one, two, nor three");
  });
});
