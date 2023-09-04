import * as Prxmpt from "../../index.js";

export interface ColonProps {
  title: Prxmpt.Children;
};

export const colon: Prxmpt.PC<ColonProps> = (props) => {
  const children = Prxmpt.render(props.children);
  const spacer = children.includes("\n") ? "\n" : " ";
  return <span>{props.title}:{spacer}{props.children}</span>;
};
