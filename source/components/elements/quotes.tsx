import * as Prxmpt from "../../index.js";

export interface QuoteProps {
  /**
   * @default false
   */
  noEscape?: boolean;
}

export const sq: Prxmpt.PC<QuoteProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/'/g, `\\'`);
  return <wrap with="'">{escaped}</wrap>;
};

export const dq: Prxmpt.PC<QuoteProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/"/g, `\\"`);
  return <wrap with='"'>{escaped}</wrap>;
};

export const code: Prxmpt.PC = (props) => {
  return <wrap with="`">{props.children}</wrap>;
};
