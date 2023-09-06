import * as Prxmpt from "../../../index.js";

export interface PrefixProps extends Prxmpt.InlineProps {
  with: Prxmpt.Children;
  repeat?: number;
};

export const prefix: Prxmpt.PC<PrefixProps> = (props) => {
  return (
    <span hide={props.hide} block={props.block}>
      <repeat count={props.repeat}>{props.with}</repeat>
      {props.children}
    </span>
  );
};
