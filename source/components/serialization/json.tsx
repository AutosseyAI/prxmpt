import { NestedOptionalJSONValue } from "types-json";
import * as Prxmpt from "../../index.js";

export interface JSONProps extends Prxmpt.BlockProps {
  data: NestedOptionalJSONValue;
  /**
   * @default false
   */
  pretty?: boolean;
};

export const json: Prxmpt.EC<JSONProps> = ({ data, pretty, inline }) => {
  const text = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  return (
    <p inline={inline}>{text}</p>
  );
};
