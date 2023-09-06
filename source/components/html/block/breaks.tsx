import * as Prxmpt from "../../../index.js";

export interface BRProps extends Prxmpt.RepeatProps, Prxmpt.HTMLProps, Prxmpt.HideProps {}

export const br: Prxmpt.FC<BRProps> = (props) => {
  return (
    <repeat hide={props.hide} count={props.count}>
      {props.html ? <tag name="br" attributes={props.attributes} /> : "\n"}
    </repeat>
  );
};

export type HRChar = "-" | "_" | "=" | "*";

export interface HRProps extends Prxmpt.HideProps, Prxmpt.HTMLProps {
  /**
   * @default 3
   */
  width?: number;
  /**
   * @default "-"
   */
  char?: HRChar;
};

export const hr: Prxmpt.FC<HRProps> = (props) => {
  if(props.html) {
    return <tag name="hr" hide={props.hide} attributes={props.attributes} />;
  } else {
    const width = props.width || 3;
    const char = props.char || "-";
    return (
      <frame with={<br />} hide={props.hide}>
        <repeat count={width}>{char}</repeat>
      </frame>
    );
  }
};
