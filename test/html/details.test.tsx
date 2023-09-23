import { expect, test } from "bun:test";
import * as Prxmpt from "../../source/index.js";

test("summary", () => {
  const text = Prxmpt.render(
    <tag name="details" attributes={{ open: true }} wrap noIndent>
      <lined>
        <tag name="summary" indent>This is a summary</tag>
        Inner Text
      </lined>
    </tag>
  );
  expect(text).toEqual("<details open>\n  <summary>This is a summary</summary>\nInner Text\n</details>");
});
