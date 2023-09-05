import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";
import { SpanProps } from "../elements/text.js";

export interface JoinProps extends SpanProps {
  with?: Prxmpt.PromptElement;
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
  return <span hide={props.hide}>{arr}</span>;
};
