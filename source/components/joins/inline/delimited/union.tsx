import * as Prxmpt from "../../../../index.js";

export interface UnionProps extends Prxmpt.InlineProps {
  /**
   * @default false
   */
  noSpace?: boolean;
}

export const union: Prxmpt.PC<UnionProps> = (props) => {
  const spacer = props.noSpace ? "|" : " | ";
  return <join with={spacer} {...props} />;
};
