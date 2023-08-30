import asArray from "as-typed-array";
import * as Prxmpt from "../";

export type MapProps = {
  to: (node: Prxmpt.Node, index: number, arr: string[] | Prxmpt.Node[]) => string;
};

export const map: Prxmpt.PC<MapProps> = (props) => {
  if(props.children) {
    return asArray(props.children).map((child, index, arr) => props.to(child, index, arr));
  } else {
    return "";
  }
};

export const blockquote: Prxmpt.PC = (props) => {
  return (
    <join with={<br />}>
      <map to={(line) => `> ${line}`}>
        <split on={`\n`}>{props.children}</split>
      </map>
    </join>
  );
};

export const tab: Prxmpt.PC = (props) => {
  return (
    <join with={<br />}>
      <map to={(line) => `  ${line}`}>
        <split on={`\n`}>{props.children}</split>
      </map>
    </join>
  );
};
