import * as Prxmpt from "../../../../index.js";

export interface CommaedProps extends Prxmpt.InlineProps {
  /**
   * @default false
   */
  noSpace?: boolean;
}

export const commaed: Prxmpt.PC<CommaedProps> = (props) => {
  const spacer = props.noSpace ? ",": ", ";
  return <join with={spacer} {...props} />;
};
