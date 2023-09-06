import compromise from "compromise";
import * as Prxmpt from "../../../index.js";

export type FractionFormat = "fraction" | "decimal" | "percent" | "ordinal";

export interface FractionProps {
  format?: FractionFormat;
};

function applyFormat(text: string, format: FractionFormat) {
  const doc = compromise(text);
  const fraction = doc.fractions();
  switch(format) {
    case "decimal":
      return fraction.toDecimal().text();
    case "fraction":
      return fraction.toFraction().text();
    case "percent":
      return fraction.toPercentage().text();
    case "ordinal":
      return fraction.toOrdinal().text();
    default:
      return text;
  };
}

export const fraction: Prxmpt.PC<FractionProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.format) {
    text = applyFormat(text, props.format);
  }
  return text;
};
