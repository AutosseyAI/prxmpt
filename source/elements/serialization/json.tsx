import type { NestedOptionalJSONValue } from "types-json";
import * as Prxmpt from "../../index.js";

export interface JSONProps extends Prxmpt.TextProps {
  /**
   * The data to stringify.
   */
  data: NestedOptionalJSONValue;
  /**
   * @default false
   */
  pretty?: boolean;
}

export const json: Prxmpt.FC<JSONProps> = (props) => {
  return (
    <text {...props}>
      {props.pretty ? JSON.stringify(props.data, null, 2) : JSON.stringify(props.data)}
    </text>
  );
};
