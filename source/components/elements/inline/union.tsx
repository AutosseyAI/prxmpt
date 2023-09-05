import * as Prxmpt from "../../../index.js";

export const union: Prxmpt.PC<Prxmpt.InlineProps> = (props) => {
  return <join with=" | " {...props} />;
};
