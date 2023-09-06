import * as Prxmpt from "../../../index.js";

// Zero Characters

export const empty: Prxmpt.FC<Prxmpt.HideProps> = (props) => {
  return <span hide={props.hide}>{""}</span>
};

// Single Characters

export interface CharProps extends Prxmpt.InlineProps, Prxmpt.RepeatProps {}

export const space: Prxmpt.FC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{" "}</repeat>;
};

export const dash: Prxmpt.FC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{"-"}</repeat>;
};

export const underscore: Prxmpt.FC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{"_"}</repeat>;
};

export const comma: Prxmpt.FC<CharProps> = (props) => {
  return <repeat hide={props.hide} block={props.block} count={props.count}>{","}</repeat>;
};

// Multiple Characters

export interface TabProps extends CharProps {
  /**
   * Number of characters per tab
   * @default 1 if `literal` is true, otherwise 2
   */
  width?: number;
  /**
   * @default false
   */
  literal?: boolean;
}

export const tab: Prxmpt.FC<TabProps> = (props) => {
  const char = props.literal
    ? "\t"
    : " ";
  return (
    <repeat hide={props.hide} block={props.block} count={props.count}>
      <repeat count={props.width ?? (props.literal ? 1 : 2)}>{char}</repeat>
    </repeat>
  );
};

export const ellipsis: Prxmpt.FC<Prxmpt.InlineProps> = (props) => {
  return <span hide={props.hide} block={props.block}>...</span>;
};

export interface NAProps extends Prxmpt.InlineProps {
  /**
   * @default false
   */
  upper?: boolean;
}

export const na: Prxmpt.FC<NAProps> = (props) => {
  return <span hide={props.hide} block={props.block}>{props.upper ? "N/A" : "n/a"}</span>;
};

