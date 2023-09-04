import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";

export interface MapProps {
  to?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => string;
};

export const map: Prxmpt.PC<MapProps> = (props) => {
  const mapper = props.to || ((node) => Prxmpt.render(node));
  if(props.children) {
    return asArray(props.children).map((child, index, arr) => mapper(child, index, arr));
  } else {
    return "";
  }
};

