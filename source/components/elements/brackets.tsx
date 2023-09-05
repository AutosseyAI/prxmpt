import * as Prxmpt from "../../index.js";
import { SpanProps } from "./text.js";

export const parens: Prxmpt.PC<SpanProps> = (props) => {
  return <bracket prefix="(" suffix=")" {...props} />;
};

export const square: Prxmpt.PC<SpanProps> = (props) => {
  return <bracket prefix="[" suffix="]" {...props} />;
};

export const curly: Prxmpt.PC<SpanProps> = (props) => {
  return <bracket prefix="{" suffix="}" {...props} />;
};

export const angle: Prxmpt.PC<SpanProps> = (props) => {
  return <bracket prefix="<" suffix=">" {...props} />;
};

export interface TagAttributes {
  attributes?: Record<string, string | undefined>;
}

export interface TagProps extends SpanProps, TagAttributes {
  name: string;
};

export interface HTMLProps extends TagAttributes {
  /**
   * @default false
   */
  html?: boolean;
}

export const tag: Prxmpt.OC<TagProps> = (props) => {
  const attributes = Object.entries(props.attributes ?? {})
    .filter(([key, value]) => value !== undefined)
    .reduce((retval, [key, value]) => {
      return `${retval} ${key}="${value}"`;
    }, "");
  if(props.children !== undefined && (!Array.isArray(props.children) || props.children.length > 0)) {
    return (
      <bracket
        hide={props.hide}
        prefix={<angle>{props.name}{attributes}</angle>}
        suffix={<angle>/{props.name}</angle>}>
        {props.children}
      </bracket>
    );
  } else {
    return (
      <angle hide={props.hide}>{props.name}{attributes} /</angle>
    );
  }
}
