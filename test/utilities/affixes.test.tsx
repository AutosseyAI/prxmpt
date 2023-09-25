import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("trim", () => {
  const string = (
    <trim>
      <p>Test</p>
    </trim>
  );
  expect(string).toEqual("Test");
});
