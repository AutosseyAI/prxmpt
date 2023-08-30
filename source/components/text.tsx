import * as Prxmpt from "../";

export const p: Prxmpt.PC = (props) => {
  return `${<>{props.children}</>}\n`;
};

export const span: Prxmpt.PC = (props) => {
  return <>{props.children}</>;
};
