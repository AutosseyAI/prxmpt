import * as Prxmpt from "../../index.js";

// Zero Characters

export const empty: Prxmpt.EC = () => {
  return "";
};

// Single Characters

export interface CharProps {
  /**
   * @default 1
   */
  length?: number;
};

export const space: Prxmpt.EC = (props: CharProps) => {
  return " ".repeat(props.length ?? 1);
};

export const dash: Prxmpt.EC = (props: CharProps) => {
  return "-".repeat(props.length ?? 1);
};

export const underscore: Prxmpt.EC = (props: CharProps) => {
  return "_".repeat(props.length ?? 1);
};

// Multiple Characters

export const ellipsis: Prxmpt.EC = () => {
  return "...";
};

export interface NAProps {
  /**
   * @default false
   */
  upper?: boolean;
}

export const na: Prxmpt.EC<NAProps> = (props) => {
  return props.upper ? "N/A" : "n/a";
};

