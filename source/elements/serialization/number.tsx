import * as Prxmpt from "../../index.js";

export interface NumProps {
  /**
   * Add a value to the number.
   */
  add?: number;
  /**
   * Minimum value. Applied after `add`.
   */
  min?: number;
  /**
   * Maximum value. Applied after `add`.
   */
  max?: number;
  /**
   * Number of decimal places.
   */
  fixed?: number;
}

export const num: Prxmpt.PC<NumProps> = (props) => {
  const text = Prxmpt.render(props.children);
  let value = Number(text);
  if(props.add !== undefined) {
    value += props.add;
  }
  if(props.min !== undefined) {
    value = Math.max(value, props.min);
  }
  if(props.max !== undefined) {
    value = Math.min(value, props.max);
  }
  if(props.fixed !== undefined) {
    return value.toFixed(props.fixed);
  } else {
    return value.toString();
  }
};
