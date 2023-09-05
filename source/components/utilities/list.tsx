import * as Prxmpt from "../../index.js";
import { SpanProps } from "../elements/text.js";
import { MapProps } from "./map.js";

export interface ListProps extends SpanProps {
  map?: MapProps["to"];
}

export const list: Prxmpt.PC<ListProps> = (props) => {
  return (
    <join with={<br />} hide={props.hide}>
      <map to={props.map}>{props.children}</map>
    </join>
  );
};

