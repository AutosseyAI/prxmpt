import { expect, test } from "bun:test";
import Prxmpt from "../../source/index.js";

test("cl", () => {
  const text = Prxmpt.render(
    <cl items={["one", "two", "three"]} />
  );
  expect(text).toEqual("- [ ] one\n- [ ] two\n- [ ] three");
});
