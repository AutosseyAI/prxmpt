import * as Prxmpt from "../../../index.js";

export interface FrameProps extends Prxmpt.InlineProps {
  with: Prxmpt.Children;
};

export const frame: Prxmpt.PC<FrameProps> = (props) => {
  return (
    <span hide={props.hide} block={props.block}>
      {props.with}
      {props.children}
      {props.with}
    </span>
  );
};
