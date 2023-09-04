import * as Prxmpt from "../../index.js";

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

export interface XMLProps {
  name: string;
  attributes?: Record<string, string | undefined>;
};

export const xml: Prxmpt.PC<XMLProps> = (props) => {
  const attributes = Object.entries(props.attributes ?? {})
    .filter(([key, value]) => value !== undefined)
    .reduce((retval, [key, value]) => {
      return `${retval} ${key}="${value}"`;
    }, "");
  return (
    <bracket
      prefix={<angle>{props.name}{attributes}</angle>}
      suffix={<angle>/{props.name}</angle>}>
      {props.children}
    </bracket>
  );
}
