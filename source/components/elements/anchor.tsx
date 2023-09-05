import * as Prxmpt from "../../index.js";
import { HTMLProps } from "./brackets.js";
import { SpanProps } from "./text.js";

export interface AnchorProps extends SpanProps, HTMLProps {
  href: string;
  title?: string;
};

export const a: Prxmpt.PC<AnchorProps> = (props) => {
  if(props.html) {
    return (
      <tag
        name="a"
        hide={props.hide}
        attributes={{ title: props.title, ...props.attributes }}>
        {props.children}
      </tag>
    );
  } else {
    return (
      <span hide={props.hide}>
        <square>{props.children}</square>
        <parens>
          {props.href}
          {props.title ? <span><space /><dq>{props.title}</dq></span> : ""}
        </parens>
      </span>
    );
  }
};
