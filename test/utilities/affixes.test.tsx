import { expect, test } from "@jest/globals";
import Prxmpt from "../../source/index.js";

test("trim", () => {
  const string = (
    <trim>
      <p>Test</p>
    </trim>
  );
  expect(string).toEqual("Test");
});
