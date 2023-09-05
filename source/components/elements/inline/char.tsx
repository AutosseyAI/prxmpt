import * as Prxmpt from "../../../index.js";

// Zero Characters

export const empty: Prxmpt.EC<Prxmpt.HideProps> = (props) => {
  return <span hide={props.hide}>{""}</span>
};

// Single Characters

export interface CharProps extends Prxmpt.InlineProps, Prxmpt.RepeatProps {}

export const space: Prxmpt.EC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{" "}</repeat>;
};

export const dash: Prxmpt.EC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{"-"}</repeat>;
};

export const underscore: Prxmpt.EC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{"_"}</repeat>;
};

// Multiple Characters

export interface TabProps extends CharProps {
  /**
   * Number of characters per tab
   * @default 1 if `noSpace` is true, otherwise 2
   */
  width?: number;
  /**
   * @default false
   */
  noSpace?: boolean;
}

export const tab: Prxmpt.EC<TabProps> = (props) => {
  const char = props.noSpace
    ? "\t"
    : " ";
  return (
    <repeat hide={props.hide} block={props.block} count={props.count}>
      <repeat count={props.width ?? (props.noSpace ? 1 : 2)}>{char}</repeat>
    </repeat>
  );
};

export const ellipsis: Prxmpt.EC<Prxmpt.InlineProps> = (props) => {
  return <span hide={props.hide} block={props.block}>...</span>;
};

export interface NAProps extends Prxmpt.InlineProps {
  /**
   * @default false
   */
  upper?: boolean;
}

export const na: Prxmpt.EC<NAProps> = (props) => {
  return <span hide={props.hide} block={props.block}>{props.upper ? "N/A" : "n/a"}</span>;
};

