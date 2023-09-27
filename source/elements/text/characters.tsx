import * as Prxmpt from "../../index.js";

// Zero Characters

export const empty: Prxmpt.FC<Prxmpt.HideProps> = (props) => {
  return <text {...props}>{""}</text>;
};

// Single Characters

export const space: Prxmpt.FC<Prxmpt.TextProps> = (props) => {
  return <text {...props}>{" "}</text>;
};

// Multiple Characters

export interface TabProps extends Prxmpt.TextProps {
  /**
   * If true, use a literal tab character. Otherwise, use spaces.
   * @default false
   */
  literal?: boolean;
  /**
   * Number of characters per tab
   * @default 1 if `literal` is true, otherwise 2
   */
  width?: number;
}

export const tab: Prxmpt.FC<TabProps> = (props) => {
  return (
    <text {...props}>
      {props.literal ? "\t" : " ".repeat(props.width ?? 2)}
    </text>
  );
};

export const ellipsis: Prxmpt.FC<Prxmpt.TextProps> = (props) => {
  return <text {...props}>...</text>;
};

export interface NAProps extends Prxmpt.TextProps {}

export const na: Prxmpt.FC<NAProps> = (props) => {
  return <text {...props}>{"n/a"}</text>;
};

