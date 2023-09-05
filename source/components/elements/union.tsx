import * as Prxmpt from "../../index.js";
import { SpanProps } from "./text.js";

export const union: Prxmpt.PC<SpanProps> = (props) => {
  return <join with=" | " hide={props.hide}>{props.children}</join>;
};
