import * as Prxmpt from "../../../index.js";

export interface LinedProps extends Prxmpt.TextProps {
  /**
   * @default 1
   */
  height?: number;
}

export const lined: Prxmpt.PC<LinedProps> = (props) => {
  return (
    <text join={<br repeat={props.height ?? 1} />} {...props}>
      {props.children}
    </text>
  );
};
