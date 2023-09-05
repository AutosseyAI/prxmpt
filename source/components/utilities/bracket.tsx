import * as Prxmpt from "../../index.js";

export interface BracketProps extends Prxmpt.InlineProps {
  prefix: Prxmpt.Children;
  suffix: Prxmpt.Children;
};

export const bracket: Prxmpt.PC<BracketProps> = (props) => {
  return (
    <span hide={props.hide} block={props.block}>
      {props.prefix}
      {props.children}
      {props.suffix}
    </span>
  );
};
