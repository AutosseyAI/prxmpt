import * as Prxmpt from "../../index.js";

export interface ListProps extends Prxmpt.BlockProps {
  map?: Prxmpt.MapProps["to"];
}

export const list: Prxmpt.PC<ListProps> = (props) => {
  return (
    <join with={<br />} hide={props.hide} block={!props.inline}>
      <map to={props.map}>{props.children}</map>
    </join>
  );
};

