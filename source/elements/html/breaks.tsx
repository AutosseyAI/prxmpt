import * as Prxmpt from "../../index.js";

export interface BRProps extends Prxmpt.HTMLProps {}

export const br: Prxmpt.FC<BRProps> = (props) => {
  if(props.html) {
    return <tag name="br" {...props} />;
  } else {
    return <text {...props}>{"\n"}</text>;
  }
};

export type HRChar = "-" | "_" | "=" | "*";

export interface HRProps extends Prxmpt.HTMLProps {
  /**
   * @default 3
   */
  width?: number;
  /**
   * @default "-"
   */
  char?: HRChar;
}

export const hr: Prxmpt.FC<HRProps> = (props) => {
  if(props.html) {
    return <tag name="hr" {...props} />;
  } else {
    const width = props.width || 3;
    const char = props.char ?? "-";
    return (
      <text {...props}>
        <text repeat={width}>{char}</text>
      </text>
    );
  }
};
