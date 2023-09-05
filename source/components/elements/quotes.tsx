import * as Prxmpt from "../../index.js";

// Quotes

export interface QuoteEscapeProps {
  /**
   * @default false
   */
  noEscape?: boolean;
}

export const sq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/'/g, `\\'`);
  return <wrap with="'">{escaped}</wrap>;
};

export const dq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/"/g, `\\"`);
  return <wrap with='"'>{escaped}</wrap>;
};

export const code: Prxmpt.PC = (props) => {
  return <wrap with="`">{props.children}</wrap>;
};

// Triple Quotes

const quoteTypes = {
  "single": "'",
  "double": `"`,
  "backtick": "`"
} as const;

export type QuoteType = keyof typeof quoteTypes;

export interface TripleQuoteProps {
  /**
   * @default "double"
   */
  type?: QuoteType;
  /**
   * @default false
   */
  noStartingNewline?: boolean;
  /**
   * @default false
   */
  noEndingNewline?: boolean;
  /**
   * @default false
   */
  trailingNewline?: boolean;
}

export const tq: Prxmpt.PC<TripleQuoteProps> = (props) => {
  const quotes = quoteTypes[props.type ?? "double"].repeat(3);
  return (
    <bracket
      prefix={`${quotes}${props.noStartingNewline ? "" : "\n"}`}
      suffix={`${props.noEndingNewline ? "" : "\n"}${quotes}${props.trailingNewline ? "\n" : ""}`}>
      {props.children}
    </bracket>
  );
};

export interface DoubleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const dtq: Prxmpt.PC<DoubleTripleQuoteProps> = (props) => {
  return (
    <tq type="double" {...props} />
  );
}

export interface SingleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const stq: Prxmpt.PC<SingleTripleQuoteProps> = (props) => {
  return (
    <tq type="single" {...props} />
  );
}

export interface BacktickTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const btq: Prxmpt.PC<BacktickTripleQuoteProps> = (props) => {
  return (
    <tq type="backtick" {...props} />
  );
}

export interface QuoteProps extends QuoteEscapeProps {
  /**
   * @default "double"
   */
  type?: QuoteType;
}

/**
 * If the children contain a newline, render as a triple quote.
 * Otherwise, render as a single quote.
 */
export const q: Prxmpt.PC<QuoteProps> = (props) => {
  const text = Prxmpt.render(props.children);
  if(text.includes("\n")) {
    return <tq {...props}>{text}</tq>;
  } else if(props.type === "single") {
    return <sq {...props} />;
  } else if(props.type === "backtick") {
    return <code {...props} />;
  } else {
    return <dq {...props} />;
  }
}
