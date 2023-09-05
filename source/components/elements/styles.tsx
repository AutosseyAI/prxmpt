import * as Prxmpt from "../../index.js";
import { HTMLProps } from "./brackets.js";
import { SpanProps } from "./text.js";

type EmphasisChar = "*" | "_";

export interface ItalicProps extends SpanProps, HTMLProps {
  /**
   * @default "_"
   */
  char?: EmphasisChar;
}

export const i: Prxmpt.PC<ItalicProps> = (props) => {
  if(props.html) {
    return <tag name="i" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    return <wrap with={props.char ?? "_"}>{props.children}</wrap>;
  }
};

export interface BoldProps extends SpanProps, HTMLProps {
  /**
   * @default "*"
   */
  char?: EmphasisChar;
}

export const b: Prxmpt.PC<BoldProps> = (props) => {
  if(props.html) {
    return <tag name="b" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    return (
      <wrap
        with={
          <repeat count={2}>{props.char ?? "*"}</repeat>
        }>
        {props.children}
      </wrap>
    );
  }
};

export interface StrikethroughProps extends SpanProps, HTMLProps {}

export const s: Prxmpt.PC<StrikethroughProps> = (props) => {
  if(props.html) {
    return <tag name="s" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    return <wrap with="~~">{props.children}</wrap>;
  };
};
