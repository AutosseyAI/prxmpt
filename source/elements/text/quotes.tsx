import * as Prxmpt from "../../index.js";

// Quote Types

const quoteTypes = {
  "single": "'",
  "double": `"`,
  "backtick": "`"
} as const;

// Quotes

export interface QuoteEscapeProps extends Prxmpt.TextProps {
  /**
   * @default false
   */
  noEscape?: boolean;
}

export const sq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/'/g, `\\'`);
  return <frame with={quoteTypes.single} {...props}>{escaped}</frame>;
};

export const dq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/"/g, `\\"`);
  return <frame with={quoteTypes.double} {...props}>{escaped}</frame>;
};

export const bq: Prxmpt.PC<QuoteEscapeProps> = (props) => {
  const text = Prxmpt.render(props.children);
  const escaped = props.noEscape ? text : text.replace(/`/g, "\\`");
  return <frame with={quoteTypes.backtick} {...props}>{escaped}</frame>;
};


// Triple Quotes

export type QuoteType = keyof typeof quoteTypes;

export interface TripleQuoteProps extends Prxmpt.TextProps {
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
}

export const tq: Prxmpt.PC<TripleQuoteProps> = (props) => {
  const quotes = quoteTypes[props.type ?? "double"].repeat(3);
  return (
    <text {...props}>
      <text
        prefix={
          <span>
            {quotes}
            <br hide={props.noStartingNewline} />
          </span>
        }
        suffix={
          <span>
            <br hide={props.noEndingNewline} />
            {quotes}
          </span>
        }>
        {props.children}
      </text>
    </text>
  );
};

export interface DoubleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tdq: Prxmpt.PC<DoubleTripleQuoteProps> = (props) => {
  return (
    <tq {...props} type="double" />
  );
}

export interface SingleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tsq: Prxmpt.PC<SingleTripleQuoteProps> = (props) => {
  return (
    <tq {...props} type="single" />
  );
}

export interface BacktickTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tbq: Prxmpt.PC<BacktickTripleQuoteProps> = (props) => {
  return (
    <tq {...props} type="backtick" />
  );
}
