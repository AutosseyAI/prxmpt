import * as Prxmpt from "../../index.js";

export interface BRProps {
  /**
   * @default 1
   */
  count?: number;
}

export const br: Prxmpt.EC<BRProps> = ({ count }) => {
  return "\n".repeat(count ?? 1);
};

export type HRChar = "-" | "_" | "=" | "*";

export interface HRProps {
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
  const width = props.width || 3;
  const char = props.char || "-";
  return <wrap with={<br />}>{char.repeat(width)}</wrap>;
};
