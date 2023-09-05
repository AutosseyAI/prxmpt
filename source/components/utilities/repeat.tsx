import * as Prxmpt from "../../index.js";
import { SpanProps } from "../elements/text.js";

export interface RepeatProps extends SpanProps {
  /**
   * @default 1
   */
  count?: number;
}

export const repeat: Prxmpt.PC<RepeatProps> = (props) => {
  const text = Prxmpt.render(props.children);
  return <span hide={props.hide}>{text.repeat(props.count ?? 1)}</span>
};

export const double: Prxmpt.PC<SpanProps> = (props) => {
  return <repeat hide={props.hide} count={2}>{props.children}</repeat>;
};

export const triple: Prxmpt.PC<SpanProps> = (props) => {
  return <repeat hide={props.hide} count={3}>{props.children}</repeat>;
};
