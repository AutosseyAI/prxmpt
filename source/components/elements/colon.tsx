import * as Prxmpt from "../../index.js";
import { SpanProps } from "./text.js";

export interface ColonProps extends SpanProps {
  title: Prxmpt.Children;
};

export const colon: Prxmpt.OC<ColonProps> = (props) => {
  const children = props.children ? Prxmpt.render(props.children) : "";
  const spacer = children
    ? children.includes("\n") ? "\n" : " "
    : "";
  return (
    <span hide={props.hide}>
      {props.title}:{spacer}{props.children}
    </span>
  );
};
