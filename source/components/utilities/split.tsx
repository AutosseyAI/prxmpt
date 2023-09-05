import * as Prxmpt from "../../index.js";

export interface SplitProps {
  on: string;
  /**
   * @default false
   */
  ignoreLeading?: boolean;
  /**
   * @default false
   */
  ignoreTrailing?: boolean;
};

export const split: Prxmpt.PC<SplitProps> = (props) => {
  const string = Prxmpt.Fragment(props);
  const array = string.split(props.on);
  if(props.ignoreLeading && array[0] === "") {
    array.shift();
  }
  if(props.ignoreTrailing && array[array.length - 1] === "") {
    array.pop();
  }
  return array;
};