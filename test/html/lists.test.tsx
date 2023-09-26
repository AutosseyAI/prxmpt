import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("ul", () => {
  test("basic", () => {
    const text = Prxmpt.render(
      <ul>
        <text>One</text>
        <text>Two</text>
        <text>Three</text>
      </ul>
    );
    expect(text).toEqual("- One\n- Two\n- Three");
  });
  test("single item", () => {
    const text = Prxmpt.render(
      <ul>
        <text>One</text>
      </ul>
    );
    expect(text).toEqual("- One");
  });
  test("single item - onlyMarkIfList", () => {
    const text = Prxmpt.render(
      <ul onlyMarkIfList>
        <text>One</text>
      </ul>
    );
    expect(text).toEqual("One");
  });
  test("custom marker", () => {
    const text = Prxmpt.render(
      <ul marker="*">
        <text>One</text>
        <text>Two</text>
        <text>Three</text>
      </ul>
    );
    expect(text).toEqual("* One\n* Two\n* Three");
  });
});

test("ol", () => {
  const text = Prxmpt.render(
    <ol>
      <text>One</text>
      <text>Two</text>
      <text>Three</text>
    </ol>
  );
  expect(text).toEqual("1. One\n2. Two\n3. Three");
});

test("cl", () => {
  const text = Prxmpt.render(
    <cl
      items={[
        "one",
        { content: "two", checked: true },
        { content: "three", checked: false },
      ]} />
  );
  expect(text).toEqual("- [ ] one\n- [x] two\n- [ ] three");
});

describe("dl", () => {
  test("basic", () => {
    const text = Prxmpt.render(
      <dl
        items={{
          one: "One",
          two: "Two",
          three: "Three"
        }} />
    );
    expect(text).toEqual("one: One\ntwo: Two\nthree: Three");
  });
  test("basic", () => {
    const text = Prxmpt.render(
      <dl
        space={1}
        items={{
          one: "One",
          two: "Two",
          three: "Three"
        }} />
    );
    expect(text).toEqual("one: One\n\ntwo: Two\n\nthree: Three");
  });
});
