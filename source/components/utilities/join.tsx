import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";

export interface JoinProps extends Prxmpt.InlineProps {
  with?: string;
};

export const join: Prxmpt.PC<JoinProps> = (props) => {
  const arr: Prxmpt.Children[] = [];
  asArray(props.children).forEach((child) => {
    if(child !== undefined) {
      if(arr.length > 0 && props.with) {
        arr.push(props.with);
      }
      arr.push(child);
    }
  });
  return <span hide={props.hide} block={props.block}>{arr}</span>;
};
