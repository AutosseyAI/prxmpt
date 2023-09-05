import * as Prxmpt from "../../index.js";
import { RepeatProps } from "../utilities/repeat.js";
import { SpanProps } from "./text.js";

// Zero Characters

export const empty: Prxmpt.EC = () => {
  return "";
};

// Single Characters

export const space: Prxmpt.EC<RepeatProps> = (props) => {
  return <repeat hide={props.hide} count={props.count}>{" "}</repeat>;
};

export const dash: Prxmpt.EC<RepeatProps> = (props) => {
  return <repeat hide={props.hide} count={props.count}>{"-"}</repeat>;
};

export const underscore: Prxmpt.EC<RepeatProps> = (props) => {
  return <repeat hide={props.hide} count={props.count}>{"_"}</repeat>;
};

// Multiple Characters

export const ellipsis: Prxmpt.EC<SpanProps> = (props) => {
  return <span hide={props.hide}>...</span>;
};

export interface NAProps extends SpanProps {
  /**
   * @default false
   */
  upper?: boolean;
}

export const na: Prxmpt.EC<NAProps> = (props) => {
  return <span hide={props.hide}>{props.upper ? "N/A" : "n/a"}</span>;
};

