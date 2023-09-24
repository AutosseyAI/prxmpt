import * as Prxmpt from "../../../index.js";

export interface FrameProps extends Prxmpt.TextProps {
  /**
   * A value to apply to both `prefix` and `suffix`.
   */
  with: Prxmpt.Children;
};

/**
 * Apply a the same value to both `prefix` and `suffix`.
 */
export const frame: Prxmpt.PC<FrameProps> = (props) => {
  return (
    <text {...props}>
      <text prefix={props.with} suffix={props.with}>
        {props.children}
      </text>
    </text>
  );
};
