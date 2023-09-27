import LoremIpsum from "./LoremIpsum.js";

export default function Prompt() {
  return (
    <lined height={2}>
      <text>
        When <code>noSkip</code> is false, we get the 1st and 4th paragraphs.
        However, when <code>noSkip</code> is true, we only get the 1st paragraph since paragraph 2 exceeds the limit.
      </text>
      <kv key="Skip" wrap>
        <tdq>
          <LoremIpsum trim />
        </tdq>
      </kv>
      <kv key="No Skip" wrap>
        <tdq>
          <LoremIpsum noSkip trim />
        </tdq>
      </kv>
    </lined>
  );
}

