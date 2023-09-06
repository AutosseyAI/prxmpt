import * as Prxmpt from "../../../index.js";

export interface ListProps extends Prxmpt.BlockProps {
  each?: Prxmpt.MapProps["each"];
}

export const list: Prxmpt.PC<ListProps> = (props) => {
  return (
    <join with={<br />} hide={props.hide} block={!props.inline}>
      <map each={props.each}>{props.children}</map>
    </join>
  );
};

