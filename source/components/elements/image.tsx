import * as Prxmpt from "../../index.js";
import { HTMLProps } from "./brackets.js";
import { SpanProps } from "./text.js";

export interface ImageProps extends SpanProps, HTMLProps {
  href: string;
};

export const img: Prxmpt.PC<ImageProps> = (props) => {
  if(props.html) {
    return <tag name="img" hide={props.hide} attributes={props.attributes} />;
  } else {
    return (
      <span hide={props.hide}>
        !<square>{props.children}</square>
        <parens>{props.href}</parens>
      </span>
    );
  }
};
