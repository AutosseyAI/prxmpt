import * as Prxmpt from "../../index.js";

export interface ColonProps {
  title: Prxmpt.Children;
};

export const colon: Prxmpt.OC<ColonProps> = (props) => {
  const children = props.children ? Prxmpt.render(props.children) : "";
  const spacer = children
    ? children.includes("\n") ? "\n" : " "
    : "";
  return <span>{props.title}:{spacer}{props.children}</span>;
};
