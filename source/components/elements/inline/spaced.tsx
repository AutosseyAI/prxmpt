import * as Prxmpt from "../../../index.js";

export const spaced: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return (
    <join hide={props.hide} block={props.block} with={<space />}>
      {props.children}
    </join>
  );
};
