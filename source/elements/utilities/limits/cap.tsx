import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";
import type { Counter } from "./shared.js";
import { charCounter } from "./shared.js";

export type CapStrategy = "ordered" | "ordered-no-skip" | "size-asc" | "size-desc";

export interface CapProps extends Prxmpt.TextProps {
  /**
   * The maximum "units" to include.
   * @default Infinity
   */
  max?: number;
  /**
   * A function that returns the number of "units" in a string.
   * @default charCounter
   */
  counter?: Counter;
  /**
   * `"ordered"`:
   * Children are prioritized by the order provided.
   * Once the maximum is reached, continue to check if remaining children fit.
   * 
   * `"ordered-no-skip"`:
   * Children are prioritized by order provided. Once the maximum is reached, stop adding children.
   * 
   * `"size-asc"`:
   * Children are prioritized in size order, smallest to largest.
   * 
   * `"size-desc"`:
   * Children are prioritized in size order, largest to smallest.
   * 
   * @default "ordered"
   */
  strategy?: CapStrategy;
  /**
   * A string to append to the end if the maximum is reached.
   * This string is included in the maximum count.
   * @default undefined
   */
  ellipsis?: string;
}

export const cap: Prxmpt.PC<CapProps> = (props) => {
  const counter = props.counter ?? charCounter;
  const childrenArray = asArray(props.children);
  // Account for length of other text props
  const prefixCount = counter(Prxmpt.render(props.prefix));
  const suffixCount = counter(Prxmpt.render(props.suffix));
  const joinCount = counter(Prxmpt.render(props.join));
  const ellipsisCount = joinCount + (props.ellipsis ? counter(props.ellipsis) : 0);
  const blockCount = props.block ? 1 : 0;
  const reserved = prefixCount + suffixCount + blockCount;
  const repeat = props.repeat ?? 1;
  // TODO: account for indent
  const max = Math.floor(((props.max ?? Infinity) - reserved) / repeat);
  let didFilter = false;
  let total = 0;
  // Keep track of indices so we can reorder
  const children = childrenArray
    .map((child, index) => ({
      text: Prxmpt.render(child),
      index
    }));
  // Apply Sorting Strategy
  if(props.strategy === "size-asc" || props.strategy === "size-desc") {
    children.sort((a, b) => {
      return props.strategy === "size-asc"
        ? counter(a.text) - counter(b.text)
        : counter(b.text) - counter(a.text);
    });
  }
  // Filter Children
  const filteredChildren = children
    .filter((child, index, arr) => {
      const count = counter(child.text);
      const isLast = index === arr.length-1;
      const hasRoomForEllipsis = total + count + ellipsisCount <= max;
      const hasRoomWithoutEllipsis = total + count <= max;
      const hasRoom = (!isLast && hasRoomForEllipsis) || (isLast && hasRoomWithoutEllipsis);
      const isStopped = props.strategy === "ordered-no-skip" && didFilter;
      if(hasRoom && !isStopped) {
        total += count + joinCount;
        return true;
      } else {
        didFilter = true;
        return false;
      }
    });
  // Reorder Children
  if(props.strategy === "size-asc" || props.strategy === "size-desc") {
    filteredChildren.sort((a, b) => a.index - b.index);
  }
  return (
    <text {...props}>
      {filteredChildren.map((child) => child.text)}
      {didFilter ? props.ellipsis : undefined}
    </text>
  );
};
