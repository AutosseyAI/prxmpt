import * as Prxmpt from "../../index.js";

export interface WrapProps {
  with: Prxmpt.PromptElement;
};

export const wrap: Prxmpt.PC<WrapProps> = (props) => {
  return <span>{props.with}{props.children}{props.with}</span>;
};
