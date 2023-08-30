import asArray from "as-typed-array";
import * as Prxmpt from "../";

type JoinProps = {
  with?: Prxmpt.PromptElement;
};

export const join: Prxmpt.PC<JoinProps> = (props) => {
  const arr: Prxmpt.PromptElement[] = [];
  asArray(props.children).forEach((child, index) => {
    if(arr.length > 0 && props.with) {
      arr.push(props.with);
    }
    arr.push(child);
  });
  return <Prxmpt.Fragment>{arr}</Prxmpt.Fragment>;
};

export const lines: Prxmpt.PC = (props) => {
  return <join with={<br />}>{props.children}</join>;
};

export const union: Prxmpt.PC = (props) => {
  return <join with=" | ">{props.children}</join>;
};
