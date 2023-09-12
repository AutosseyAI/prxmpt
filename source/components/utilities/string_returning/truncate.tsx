import * as Prxmpt from "../../../index.js";
import { charCounter, Counter } from "../shared.js";

export interface TruncateProps {
  /**
   * The maximum "units" to display.
   */
  max: number;
  /**
   * A function that returns the number of "units" in a string.
   * @default charCounter
   */
  counter?: Counter;
  /**
   * A pattern to force the string to split on.
   * @default <space />
   */
  split?: Prxmpt.Children;
  /**
   * A suffix to append to the truncated string.
   * The suffix is included in the `max` count.
   * @default <ellipsis />
   */
  suffix?: Prxmpt.Children;
};

/**
 * Truncate a string to a maximum number of "units".
 * Optionally append a suffix.
 */
export const truncate: Prxmpt.PC<TruncateProps> = (props) => {
  const string = Prxmpt.render(props.children);
  const counter = props.counter ?? charCounter;
  const split = props.split ? Prxmpt.render(props.split) : <space />;
  const suffix = props.suffix ? Prxmpt.render(props.suffix) : <ellipsis />;

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
