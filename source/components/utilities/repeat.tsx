import * as Prxmpt from "../../index.js";

export interface RepeatProps extends Prxmpt.InlineProps {
  /**
   * @default 1
   */
  count?: number;
}

export const repeat: Prxmpt.PC<RepeatProps> = (props) => {
  const text = Prxmpt.render(props.children);
  return <span hide={props.hide} block={props.block}>{text.repeat(props.count ?? 1)}</span>
};

export const double: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={2}>{props.children}</repeat>;
};

export const triple: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={3}>{props.children}</repeat>;
};
