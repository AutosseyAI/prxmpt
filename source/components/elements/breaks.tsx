import * as Prxmpt from "../../index.js";
import { RepeatProps } from "../utilities/repeat.js";
import { HTMLProps } from "./brackets.js";
import { SpanProps } from "./text.js";

export interface BRProps extends RepeatProps, HTMLProps {}

export const br: Prxmpt.EC<BRProps> = (props) => {
  return (
    <repeat hide={props.hide} count={props.count}>
      {props.html ? <tag name="br" attributes={props.attributes} /> : "\n"}
    </repeat>
  );
};

export type HRChar = "-" | "_" | "=" | "*";

export interface HRProps extends SpanProps, HTMLProps {
  /**
   * @default 3
   */
  width?: number;
  /**
   * @default "-"
   */
  char?: HRChar;
};

export const hr: Prxmpt.EC<HRProps> = (props) => {
  if(props.html) {
    return <tag name="hr" hide={props.hide} attributes={props.attributes} />;
  } else {
    const width = props.width || 3;
    const char = props.char || "-";
    return (
      <wrap with={<br />} hide={props.hide}>
        <repeat count={width}>{char}</repeat>
      </wrap>
    );
  }
};
