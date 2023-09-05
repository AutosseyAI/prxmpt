import * as Prxmpt from "../../index.js";

export const sq: Prxmpt.PC = (props) => {
  return <wrap with="'">{props.children}</wrap>;
};

export const dq: Prxmpt.PC = (props) => {
  return <wrap with='"'>{props.children}</wrap>;
};

export const code: Prxmpt.PC = (props) => {
  return <wrap with="`">{props.children}</wrap>;
};
