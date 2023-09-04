import { JSONValue } from "types-json";
import * as Prxmpt from "../../index.js";

export interface JSONProps {
  data: JSONValue;
  /**
   * @default false
   */
  pretty?: boolean;
};

export const json: Prxmpt.EC<JSONProps> = ({ data, pretty }) => {
  if(pretty) {
    return JSON.stringify(data, null, 2);
  } else {
    return JSON.stringify(data);
  }
};
