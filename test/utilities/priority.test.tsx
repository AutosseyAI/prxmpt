import { describe, expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

describe("basics", () => {
  test("no priorities", () => {
    const text = (
      <priority
        max={10}
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1");
  });
  test("priority 1", () => {
    const text = (
      <priority
        max={10}
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          p: 1,
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 2");
  });
  test("negative priority", () => {
    const text = (
      <priority
        max={15}
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          p: -1,
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1\nTest 3");
  });
});

describe("cap", () => {
  test("simple", () => {
    const text = (
      <priority
        max={10}
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          content: (capacity) => (
            <cap max={capacity}>
              {Prxmpt.chars("Test 2")}
            </cap>
          )
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1\nTes");
  });
});
