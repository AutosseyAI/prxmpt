import { expect, test } from "@jest/globals";
import type { LoaderContext, LoadResult } from "../../source/loader.js";
import { load } from "../../source/loader.js";

async function mockLoad(sourceUrl: string, context: LoaderContext, defaultLoad: typeof mockLoad): Promise<LoadResult> {
  return Promise.resolve({
    format: "module",
    source: "Test"
  });
}

test("load", async () => {
  const sourceUrl = new URL("./example.jsx", import.meta.url).href;
  const result = await load(sourceUrl, { format: "module", importAssertions: {} }, mockLoad);
  expect(result).toEqual({
    format: "module",
    source: [
      "import { jsx as _jsx } from \"@autossey/prxmpt/jsx-runtime\";",
      "export default function Prompt() {",
      "    return /*#__PURE__*/ _jsx(\"text\", {",
      "        children: \"Test\"",
      "    });",
      "}",
      ""
    ].join("\n"),
    shortCircuit: true
  });
});

test("defaultLoad", async () => {
  const sourceUrl = new URL("./example.json", import.meta.url).href;
  const result = await load(sourceUrl, { format: "module", importAssertions: {} }, mockLoad);
  expect(result).toEqual({
    format: "module",
    source: "Test"
  });
});
