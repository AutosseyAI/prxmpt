import asArray from "as-typed-array";
import compromise from "compromise";
import * as Prxmpt from "../../../index.js";

export type NumFormat = "digit" | "text";

export type NumKind = "ordinal" | "cardinal";

export interface NumProps {
  format?: NumFormat;
  kind?: NumKind;
  /**
   * Number of decimal places.
   */
  fixed?: number;
  /**
   * Add a value to the number.
   */
  add?: number;
  /**
   * Minimum value. Applied after `add`.
   */
  min?: number;
  /**
   * Maximum value. Applied after `add`.
   */
  max?: number;
};

function applyFormat(text: string, format: NumFormat) {
  const doc = compromise(text);
  const number = doc.numbers();
  switch(format) {
    case "digit":
      return number.toNumber().text();
    case "text":
      return number.toText().text();
    default:
      return text;
  };
}

function applyKind(text: string, kind: NumKind) {
  const doc = compromise(text);
  const number = doc.numbers();
  switch(kind) {
    case "ordinal":
      return number.toOrdinal().text();
    case "cardinal":
      return number.toCardinal().text();
    default:
      return text;
  };
}

function applyAdd(text: string, add: number) {
  const doc = compromise(text).numbers();
  const value = asArray(doc.get())[0];
  if(value !== undefined) {
    return doc.set(value + add).text();
  }
  return text;
}

function applyMin(text: string, min: number) {
  const doc = compromise(text).numbers();
  const value = asArray(doc.get())[0];
  if(value !== undefined) {
    return doc.set(Math.max(value, min)).text();
  }
  return text;
}

function applyMax(text: string, max: number) {
  const doc = compromise(text).numbers();
  const value = asArray(doc.get())[0];
  if(value !== undefined) {
    return doc.set(Math.min(value, max)).text();
  }
  return text;
}

export const num: Prxmpt.PC<NumProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.add !== undefined) {
    text = applyAdd(text, props.add);
  }
  if(props.min !== undefined) {
    text = applyMin(text, props.min);
  }
  if(props.max !== undefined) {
    text = applyMax(text, props.max);
  }
  if(props.fixed !== undefined) {
    text = Number(text).toFixed(props.fixed);
  }
  if(props.format) {
    text = applyFormat(text, props.format);
  }
  if(props.kind) {
    text = applyKind(text, props.kind);
  }
  return text;
};
