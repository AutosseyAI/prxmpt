import { NestedOptionalJSONValue } from "types-json";
import * as YAML from "yaml";
import * as Prxmpt from "../../index.js";

export interface YAMLProps extends Prxmpt.BlockProps {
  data: NestedOptionalJSONValue;
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
  const string = YAML.stringify(props.data, {
    directives: props.noStartMarker ? false : true, // Default: include "---" prefix
    indentSeq: props.sequenceIndent ? true : false, // Default: disable sequence indentation
    lineWidth: 0 // Disable automatic line wrapping
  });
  return props.inline ? string.trimEnd() : string;
};
