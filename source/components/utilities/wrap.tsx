import * as Prxmpt from "../../index.js";

export interface WrapProps extends Prxmpt.InlineProps {
  with: string;
};

export const wrap: Prxmpt.PC<WrapProps> = (props) => {
  return (
    <span hide={props.hide} block={props.block}>
      {props.with}
      {props.children}
      {props.with}
    </span>
  );
};
