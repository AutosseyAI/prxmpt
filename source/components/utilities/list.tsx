import * as Prxmpt from "../../index.js";
import { MapProps } from "./map.js";

export interface ListProps {
  map?: MapProps["to"];
}

export const list: Prxmpt.PC<ListProps> = (props) => {
  return (
    <join with={<br />}>
      <map to={props.map}>{props.children}</map>
    </join>
  );
};

