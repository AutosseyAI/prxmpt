import { describe, expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

describe("basics", () => {
  test("no max", () => {
    const text = (
      <priority
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1\nTest 2\nTest 3");
  });
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
  test("custom counter", () => {
    const text = (
      <priority
        max={4}
        counter={(item) => item.length / 4}
        join={"\n"}
        items={[{
          content: "Test 1"
        }, {
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1\nTest 2");
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
  test("repeat", () => {
    const text = (
      <priority
        max={14}
        join={"\n"}
        repeat={2}
        items={[{
          content: "Test 1"
        }, {
          p: 1,
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 2Test 2");
  });
  test("block - two items", () => {
    const text = (
      <priority
        max={14}
        join={"\n"}
        block
        items={[{
          content: "Test 1"
        }, {
          p: 1,
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 1\nTest 2\n");
  });
  test("block - cut short", () => {
    const text = (
      <priority
        max={13}
        join={"\n"}
        block
        items={[{
          content: "Test 1"
        }, {
          p: 1,
          content: "Test 2"
        }, {
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 2\n");
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
  test("no skip", () => {
    const text = (
      <priority
        max={15}
        strategy="priority-no-skip"
        join={"\n"}
        items={[{
          p: 1,
          content: "Test 1"
        }, {
          p: 2,
          content: "Test 2 which is longer than will fit"
        }, {
          p: 3,
          content: "Test 3"
        }]} />
    );
    expect(text).toEqual("Test 3");
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
