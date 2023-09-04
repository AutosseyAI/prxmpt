import * as Prxmpt from "../../index.js";

export const span: Prxmpt.PC = (props) => {
  return <Prxmpt.Fragment>{props.children}</Prxmpt.Fragment>;
};

export const p: Prxmpt.PC = (props) => {
  return <span>{props.children}<br /></span>;
};
