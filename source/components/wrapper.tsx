import * as Prxmpt from "../";

type WrapProps = {
  with: Prxmpt.PromptElement;
};

export const wrap: Prxmpt.PC<WrapProps> = (props) => {
  return `${props.with}${<>{props.children}</>}${props.with}`;
};

// Text Styling

export const b: Prxmpt.PC = (props) => {
  return <wrap with="**">{props.children}</wrap>;
};

export const i: Prxmpt.PC = (props) => {
  return <wrap with="_">{props.children}</wrap>;
};

export const s: Prxmpt.PC = (props) => {
  return <wrap with="~">{props.children}</wrap>;
};

// Quotes

export const singlequote: Prxmpt.PC = (props) => {
  return <wrap with="'">{props.children}</wrap>;
};

export const doublequote: Prxmpt.PC = (props) => {
  return <wrap with='"'>{props.children}</wrap>;
};

export const code: Prxmpt.PC = (props) => {
  return <wrap with="`">{props.children}</wrap>;
};
