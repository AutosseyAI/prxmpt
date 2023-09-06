import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";

export interface MapProps {
  each?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => Prxmpt.JSX.Element;
};

export const map: Prxmpt.PC<MapProps> = (props) => {
  const mapper = props.each || ((node) => Prxmpt.render(node));
  if(props.children) {
    return asArray(props.children)
      .filter((child) => child !== undefined)
      .map((child, index, arr) => mapper(child, index, arr));
  } else {
    return "";
  }
};
