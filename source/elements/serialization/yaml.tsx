import type { NestedOptionalJSONValue } from "types-json";
import * as YAML from "yaml";
import * as Prxmpt from "../../index.js";

export interface YAMLProps extends Prxmpt.TextProps {
  /**
   * The data to stringify.
   */
  data: NestedOptionalJSONValue;
  /**
   * @default false
   */
  noStartMarker?: boolean;
  /**
   * @default false
   */
  sequenceIndent?: boolean;
}

export const yaml: Prxmpt.FC<YAMLProps> = (props) => {
  const string = YAML.stringify(props.data, {
    directives: !props.noStartMarker, // Default: include "---" prefix
    indentSeq: Boolean(props.sequenceIndent), // Default: disable sequence indentation
    lineWidth: 0 // Disable automatic line wrapping
  }).trimEnd();
  return (
    <text {...props}>
      {string}
    </text>
  );
};
