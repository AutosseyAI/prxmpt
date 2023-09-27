import Prompt from "./PromptExample.js";
import Skip from "./SkipExample.js";

export default function Examples() {
  return (
    <sectioned divider={"\n---\n"}>
      <kv key="Skip Example">
        <Skip />
      </kv>
      <kv key="Prompt Example">
        <Prompt />
      </kv>
    </sectioned>
  )
}
