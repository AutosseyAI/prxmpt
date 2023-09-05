import * as Prxmpt from "../../../index.js";

export const parens: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <bracket prefix="(" suffix=")" {...props} />;
};

export const square: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <bracket prefix="[" suffix="]" {...props} />;
};

export const curly: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <bracket prefix="{" suffix="}" {...props} />;
};

export const angle: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <bracket prefix="<" suffix=">" {...props} />;
};
