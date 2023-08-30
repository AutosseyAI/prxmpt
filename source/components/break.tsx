import * as Prxmpt from "../";

export const br: Prxmpt.EC = () => {
  return "\n";
};

type HRChar = "-" | "_" | "=" | "*";

type HRProps = {
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
