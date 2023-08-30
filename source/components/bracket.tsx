import * as Prxmpt from "../";

type BracketProps = {
  prefix: string;
  suffix: string;
};

export const bracket: Prxmpt.PC<BracketProps> = (props) => {
  return `${props.prefix}${<>{props.children}</>}${props.suffix}`;
};

export const parens: Prxmpt.PC = (props) => {
  return <bracket prefix="(" suffix=")">{props.children}</bracket>;
};

export const square: Prxmpt.PC = (props) => {
  return <bracket prefix="[" suffix="]">{props.children}</bracket>;
};

export const curly: Prxmpt.PC = (props) => {
  return <bracket prefix="{" suffix="}">{props.children}</bracket>;
};

export const angle: Prxmpt.PC = (props) => {
  return <bracket prefix="<" suffix=">">{props.children}</bracket>;
};
