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
  return <frame with="'" hide={props.hide} block={props.block}>{escaped}</frame>;
};

export const dq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/"/g, `\\"`);
  return <frame with='"' hide={props.hide} block={props.block}>{escaped}</frame>;
};

export const code: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/`/g, "\\`");
  return <frame with="`" hide={props.hide} block={props.block}>{escaped}</frame>;
};
