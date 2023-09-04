import { JSONValue } from "types-json";
import * as YAML from "yaml";
import * as Prxmpt from "../../index.js";

export interface YAMLProps {
  data: JSONValue;
  /**
   * @default false
   */
  noStartMarker?: boolean;
  /**
   * @default false
   */
  sequenceIndent?: boolean;
};

export const yaml: Prxmpt.EC<YAMLProps> = (props) => {
  return YAML.stringify(props.data, {
    directives: props.noStartMarker ? false : true, // Default: include "---" prefix
    indentSeq: props.sequenceIndent ? true : false, // Default: disable sequence indentation
    lineWidth: 0 // Disable automatic line wrapping
  });
};
