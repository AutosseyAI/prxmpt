import * as Prxmpt from "../../index.js";
import { SpanProps } from "../elements/text.js";

export interface BracketProps extends SpanProps {
  prefix: Prxmpt.Children;
  suffix: Prxmpt.Children;
};

export const bracket: Prxmpt.PC<BracketProps> = (props) => {
  return (
    <span hide={props.hide}>
      {props.prefix}
      {props.children}
      {props.suffix}
    </span>
  );
};
