import * as Prxmpt from "../../../index.js";

export const spaced: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return (
    <text {...props} join={<space />}>
      {props.children}
    </text>
  );
};

export interface DelimitedProps extends Prxmpt.TextProps {
  /**
   * @default false
   */
  noSpace?: boolean;
}

export const commaed: Prxmpt.PC<DelimitedProps> = (props) => {
  const spacer = props.noSpace ? ",": ", ";
  return <text {...props} join={spacer} />;
};

export const union: Prxmpt.PC<DelimitedProps> = (props) => {
  const spacer = props.noSpace ? "|" : " | ";
  return <text {...props} join={spacer} />;
};
