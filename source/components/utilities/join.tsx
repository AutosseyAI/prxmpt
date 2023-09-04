import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";

export interface JoinProps {
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
  return <Prxmpt.Fragment>{arr}</Prxmpt.Fragment>;
};
