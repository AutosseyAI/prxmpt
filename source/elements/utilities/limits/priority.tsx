import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";

type Defined<T> = T extends undefined ? never : T;

function isDefined<T>(value: T): value is Defined<T> {
  return value !== undefined;
}

export type Counter = (string: string) => number;

function charCounter(str: string) {
  return str.length;
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

function asItem(item: PriorityItem | Prxmpt.Children): PriorityItem {
  if(Prxmpt.isChildren(item)) {
    return { content: item };
  } else {
    return item;
  }
}

function renderItem(itemOrChild: PriorityItem | Prxmpt.Children, capacity = Infinity) {
  const item = asItem(itemOrChild);
  return typeof item.content === "function"
    ? Prxmpt.render(item.content(capacity))
    : Prxmpt.render(item.content);
}

export type PriorityStrategy = | "priority" | "order-asc" | "order-desc" | "size-asc" | "size-desc";

export interface PriorityProps extends Omit<Prxmpt.TextProps, "indent"> {
  /**
   * The maximum "units" to include.
   * @default Infinity
   */
  max?: number;
  /**
   * A function that returns the number of "units" in a string.
   * @default (string: string) => string.length
   */
  counter?: Counter;
  /**
   * The items to render, in order of priority.
   */
  items: (PriorityItem | Prxmpt.Children)[];
  /**
   * The strategy to use when prioritizing items.
   * If multiple strategies are provided, subsequent strategies are tried in order to break ties.
   * 
   * `"priority"`:
   * Prioritize items by the provided priority.
   * Once the maximum is reached, continue to check if remaining items fit.
   *
   * `"order-asc"`:
   * Prioritize items by the order provided.
   * Once the maximum is reached, continue to check if remaining items fit.
   * 
   * `"order-desc"`:
   * Prioritize items in reverse of the order provided.
   * Once the maximum is reached, continue to check if remaining items fit.
   *
   * `"size-asc"`:
   * Prioritize items in size order, smallest to largest.
   * Use if you want to include as many items as possible.
   * 
   * `"size-desc"`:
   * Prioritized items in size order, largest to smallest.
   * Use if you want to include as few items as possible.
   * 
   * @default ["priority", "order-asc"]
   */
  strategy?: PriorityStrategy | PriorityStrategy[];
  /**
   * If `true`, do not skip items after the maximum is reached.
   * @default false
   */
  noSkip?: boolean;
}

export const priority: Prxmpt.FC<PriorityProps> = (props) => {
  const counter = props.counter ?? charCounter;
  // Account for length of other text props
  const prefixCount = counter(Prxmpt.render(props.prefix));
  const suffixCount = counter(Prxmpt.render(props.suffix));
  const joinCount = counter(Prxmpt.render(props.join));
  const blockCount = props.block ? 1 : 0;
  const reserved = prefixCount + suffixCount + blockCount;
  const repeat = props.repeat ?? 1;
  let capacity = ((props.max ?? Infinity) - reserved) / repeat;
  let didFilter = false;
  // Sort by according to the provided strategy, keeping track of the original order
  const strategies: PriorityStrategy[] = props.strategy ? asArray(props.strategy) : ["priority", "order-asc"];
  const sorted = props.items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const itemA = asItem(a.item);
      const itemB = asItem(b.item);
      return strategies.reduce((result: number, strategy: PriorityStrategy) => {
        if(result === 0) {
          if(strategy === "priority") {
            return (itemB.p ?? 0) - (itemA.p ?? 0); // Sort descending
          } else if(strategy === "size-asc") {
            const contentA = renderItem(itemA);
            const contentB = renderItem(itemB);
            return counter(contentA) - counter(contentB); // Sort ascending
          } else if(strategy === "size-desc") {
            const contentA = renderItem(itemA);
            const contentB = renderItem(itemB);
            return counter(contentB) - counter(contentA); // Sort descending
          } else if(strategy === "order-asc") {
            return a.index - b.index; // Sort ascending
          } else if(strategy === "order-desc") {
            return b.index - a.index; // Sort descending
          }
        }
        return result;
      }, 0);
    });
  // Render until capacity is reached
  const rendered = sorted.map(({ item, index }) => {
    const content = renderItem(item, capacity);
    const newCapacity = capacity - counter(content);
    const isStopped = props.noSkip && didFilter;
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
