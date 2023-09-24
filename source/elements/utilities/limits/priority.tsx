import * as Prxmpt from "../../../index.js";
import { charCounter, Counter } from "./shared.js";

type Defined<T> = T extends undefined ? never : T;

function isDefined<T>(value: T): value is Defined<T> {
  return value !== undefined;
}

export type PriorityItem = {
  /**
   * The priority of this item. Higher priority items are included first.
   * @default 0
   */
  p?: number;
  /**
   * The content to render.
   */
  content: ((capacity: number) => Prxmpt.Children) | Prxmpt.Children;
};

export interface PriorityProps extends Prxmpt.TextProps {
  /**
   * The maximum "units" to include.
   * @default Infinity
   */
  max?: number;
  /**
   * The items to render, in order of priority.
   */
  items: PriorityItem[];
  /**
   * A function that returns the number of "units" in a string.
   * @default charCounter
   */
  counter?: Counter;
  /**
   * `"priority"`: Once the maximum is reached, continue to check if remaining children fit.
   * 
   * `"priority-no-skip"`: Once the maximum is reached, stop adding children.
   * 
   * @default "priority"
   */
  strategy?: "priority" | "priority-no-skip";
};


export const priority: Prxmpt.FC<PriorityProps> = (props) => {
  const counter = props.counter ?? charCounter;
  // Account for length of other text props
  const prefixCount = counter(Prxmpt.render(props.prefix));
  const suffixCount = counter(Prxmpt.render(props.suffix));
  const joinCount = counter(Prxmpt.render(props.join));
  const blockCount = props.block ? 1 : 0;
  const reserved = prefixCount + suffixCount + blockCount;
  const repeat = props.repeat ?? 1;
  // TODO: account for indent
  let capacity = Math.floor(((props.max ?? Infinity) - reserved) / repeat);
  let didFilter = false;
  // Sort by priority, keeping track of the original order
  const sorted = props.items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => (b.item.p ?? 0) - (a.item.p ?? 0)); // Sort descending
  // Render until capacity is reached
  const rendered = sorted.map(({ item, index }) => {
    const content = typeof item.content === "function"
      ? Prxmpt.render(item.content(capacity))
      : Prxmpt.render(item.content);
    const newCapacity = capacity - counter(content);
    const isStopped = props.strategy === "priority-no-skip" && didFilter;
    if(newCapacity < 0 || isStopped) {
      didFilter = true;
      return undefined;
    } else {
      capacity = newCapacity - joinCount;
      return { content, index };
    }
  });
  // Return the rendered content, in the original order
  const reordered = rendered
    .filter(isDefined)
    .sort((a, b) => a.index - b.index)
    .map(({ content }) => content);
  return (
    <text {...props}>
      {reordered}
    </text>
  );
};
