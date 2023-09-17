import * as Prxmpt from "../../index.js";

export interface BracketProps extends Prxmpt.TextProps {};

export const parens: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return (
    <text {...props}>
      <text prefix="(" suffix=")">{props.children}</text>
    </text>
  );
};

export const square: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return (
    <text {...props}>
      <text prefix="[" suffix="]">{props.children}</text>
    </text>
  );
};

export const curly: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return (
    <text {...props}>
      <text prefix="{" suffix="}">{props.children}</text>
    </text>
  );
};

export const angle: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return (
    <text {...props}>
      <text prefix="<" suffix=">">{props.children}</text>
    </text>
  );
};
