import * as Prxmpt from "../../../index.js";

// Triple Quotes

const quoteTypes = {
  "single": "'",
  "double": `"`,
  "backtick": "`"
} as const;

export type QuoteType = keyof typeof quoteTypes;

export interface TripleQuoteProps extends Prxmpt.BlockProps {
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
    <bracket
      hide={props.hide}
      block={!props.inline}
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
    </bracket>
  );
};

export interface DoubleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tdq: Prxmpt.PC<DoubleTripleQuoteProps> = (props) => {
  return (
    <tq type="double" {...props} />
  );
}

export interface SingleTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tsq: Prxmpt.PC<SingleTripleQuoteProps> = (props) => {
  return (
    <tq type="single" {...props} />
  );
}

export interface BacktickTripleQuoteProps extends Omit<TripleQuoteProps, "type"> {};

export const tbq: Prxmpt.PC<BacktickTripleQuoteProps> = (props) => {
  return (
    <tq type="backtick" {...props} />
  );
}
