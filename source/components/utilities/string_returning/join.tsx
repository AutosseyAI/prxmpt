import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";

export interface JoinProps extends Prxmpt.InlineProps {
  with?: string;
};

export const join: Prxmpt.PC<JoinProps> = (props) => {
  const children = asArray(props.children)
    .filter((child) => child !== undefined)
    .reduce((arr: Prxmpt.Children[], child) => {
      if(arr.length > 0 && props.with) {
        arr.push(props.with);
      }
      arr.push(child);
      return arr;
    }, [] as Prxmpt.Children[]);
  return <span hide={props.hide} block={props.block}>{children}</span>;
};
