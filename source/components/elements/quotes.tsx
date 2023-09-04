import * as Prxmpt from "../../index.js";

export const singlequote: Prxmpt.PC = (props) => {
  return <wrap with="'">{props.children}</wrap>;
};

export const doublequote: Prxmpt.PC = (props) => {
  return <wrap with='"'>{props.children}</wrap>;
};

export const code: Prxmpt.PC = (props) => {
  return <wrap with="`">{props.children}</wrap>;
};
