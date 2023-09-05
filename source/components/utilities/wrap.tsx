import * as Prxmpt from "../../index.js";
import { SpanProps } from "../elements/text.js";

export interface WrapProps extends SpanProps {
  with: Prxmpt.PromptElement;
};

export const wrap: Prxmpt.PC<WrapProps> = (props) => {
  return (
    <span hide={props.hide}>
      {props.with}
      {props.children}
      {props.with}
    </span>
  );
};
