import * as Prxmpt from "../index";

type Counter = (string: string) => number;

type TruncateProps = {
  max: number;
  counter?: Counter;
  /**
   * @default " "
   */
  split?: string;
  /**
   * @default "..."
   */
  suffix?: string;
}

function charCounter(str: string) {
  return str.length;
}

export const truncate: Prxmpt.PC<TruncateProps> = (props) => {
  const string = Prxmpt.Fragment(props);
  const counter = props.counter ?? charCounter;
  const split = props.split ?? " ";
  const suffix = props.suffix ?? "...";

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
