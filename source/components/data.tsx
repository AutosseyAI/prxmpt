import { JSONValue } from "types-json";
import * as YAML from "yaml";
import * as Prxmpt from "../index";

type YAMLProps = {
  data: JSONValue;
};

export const yaml: Prxmpt.EC<YAMLProps> = ({ data }) => {
  return YAML.stringify(data, {
    directives: true, // Force --- prefix
    indentSeq: false, // disable sequence indentation
    lineWidth: 0 // disable automatic line wrapping
  });
};

type JSONProps = {
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
