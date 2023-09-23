import * as Prxmpt from "../../index.js";

export interface TrimProps extends Omit<Prxmpt.TextProps, "trim"> {};

export const trim: Prxmpt.PC<TrimProps> = (props) => {
  return (
    <text {...props} trim>
      {props.children}
    </text>
  );
};
