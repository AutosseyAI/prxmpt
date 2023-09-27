import { counter } from "./counter.js";
import LoremIpsum from "./LoremIpsum.js";

export default function Prompt() {
  return (
    <priority
      max={600}
      counter={counter}
      join={"\n"}
      trim
      items={[{
        p: 2,
        content: (
          <p>
            Here is an intro to our system message, followed by some chunks of text, a note, and a footer.
            Since the intro and footer have higher priorities, the remaining capacity will roll down to the chunks.
            If we don't have enough capacity after rendering the chunks, the note will be skipped.
          </p>
        )
      }, {
        content: (capacity) => (
          <LoremIpsum capacity={capacity} />
        )
      }, {
        p: -1,
        content: <p>Here is a note we don't really care about, unless we happen to have enough space left over.</p>
      }, {
        p: 1,
        content: <p>Here is the end of our system message.</p>
      }]} />
  );
}
