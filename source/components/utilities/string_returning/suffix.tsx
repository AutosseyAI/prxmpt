import * as Prxmpt from "../../../index.js";

export interface SuffixProps extends Prxmpt.InlineProps {
  with: Prxmpt.Children;
  repeat?: number;
};

export const suffix: Prxmpt.PC<SuffixProps> = (props) => {
  return (
    <span hide={props.hide} block={props.block}>
      {props.children}
      <repeat count={props.repeat}>{props.with}</repeat>
    </span>
  );
};
