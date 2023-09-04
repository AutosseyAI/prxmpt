import * as Prxmpt from "../../index.js";

export type Counter = (string: string) => number;

export interface TruncateProps {
  max: number;
  counter?: Counter;
  /**
   * @default <space />
   */
  split?: Prxmpt.PromptElement;
  /**
   * @default <ellipsis />
   */
  suffix?: Prxmpt.PromptElement;
};

function charCounter(str: string) {
  return str.length;
}

export const truncate: Prxmpt.PC<TruncateProps> = (props) => {
  const string = Prxmpt.Fragment(props);
  const counter = props.counter ?? charCounter;
  const split = props.split ?? <space />;
  const suffix = props.suffix ?? <ellipsis />;

  const count = counter(string);
  if(count <= props.max) {
    return string;
  }

  const words = string.split(split);

  let left = 0;
  let right = words.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const truncated = words.slice(0, mid).join(split) + suffix;
    if(counter(truncated) <= props.max) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return words.slice(0, right).join(split) + suffix;
};
