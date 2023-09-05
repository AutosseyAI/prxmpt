import * as Prxmpt from "../../../index.js";

// Quotes

export interface QuoteEscapeProps extends Prxmpt.InlineProps {
  /**
   * @default false
   */
  noEscape?: boolean;
}

export const sq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/'/g, `\\'`);
  return <wrap with="'" hide={props.hide} block={props.block}>{escaped}</wrap>;
};

export const dq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/"/g, `\\"`);
  return <wrap with='"' hide={props.hide} block={props.block}>{escaped}</wrap>;
};

export const code: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/`/g, "\\`");
  return <wrap with="`" hide={props.hide} block={props.block}>{escaped}</wrap>;
};
