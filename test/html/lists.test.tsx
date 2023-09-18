import assert from "node:assert";
import { test } from "node:test";
import * as Prxmpt from "../../source/index.js";

test("cl", () => {
  const text = Prxmpt.render(
    <cl items={["one", "two", "three"]} />
  );
  assert.equal(text, "- [ ] one\n- [ ] two\n- [ ] three");
});
