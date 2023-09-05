import * as Prxmpt from "../../index.js";

export interface ColonProps extends Prxmpt.InlineProps, Prxmpt.BlockProps {
  title: Prxmpt.Children;
};

export const colon: Prxmpt.OC<ColonProps> = (props) => {
  const children = props.children ? Prxmpt.render(props.children) : "";
  const block = children.includes("\n");
  const spacer = children
    ? block ? "\n" : " "
    : "";
  return (
    <span hide={props.hide} block={(block && !props.inline) || props.block}>
      {props.title}:{spacer}{props.children}
    </span>
  );
};
