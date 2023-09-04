import * as Prxmpt from "../../index.js";

export interface BracketProps {
  prefix: Prxmpt.Children;
  suffix: Prxmpt.Children;
};

export const bracket: Prxmpt.PC<BracketProps> = (props) => {
  return <span>{props.prefix}{props.children}{props.suffix}</span>
};
