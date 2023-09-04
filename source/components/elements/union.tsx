import * as Prxmpt from "../../index.js";

export const union: Prxmpt.PC = (props) => {
  return <join with=" | ">{props.children}</join>;
};
