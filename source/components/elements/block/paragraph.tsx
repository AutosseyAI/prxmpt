import * as Prxmpt from "../../../index.js";

export const p: Prxmpt.PC<Prxmpt.BlockProps> = (props) => {
  return (
    <span hide={props.hide} block={!props.inline}>
      {props.children}
    </span>
  );
};
