import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";
import { charCounter, Counter } from "../shared.js";

export interface CapProps {
  /**
   * The maximum "units" to include.
   */
  max: number;
  /**
   * A function that returns the number of "units" in a string.
   * @default charCounter
   */
  counter?: Counter;
  /**
   * Stop once the maximum is reached, rather than continuing to check if remaining children fit.
   * @default false
   */
  stopEarly?: boolean;
}

export const cap: Prxmpt.PC<CapProps> = (props) => {
  const children = asArray(props.children);
  const counter = props.counter ?? charCounter;
  let done = false;
  let total = 0;
  return children
    .map((child) => Prxmpt.render(child))
    .filter((text) => {
      if(total < props.max) {
        const count = counter(text);
        if(total + count < props.max && !done) {
          total += count;
          return true;
        } else if(props.stopEarly) {
          done = true;
        }
      }
      return false;
    });
};
