import asArray from "as-typed-array";
import * as Prxmpt from "../../../../index.js";

export interface SetProps {
  conjunction: string;
  /**
   * @default false
   */
  noOxfordComma?: boolean;
}

export const set: Prxmpt.PC<SetProps> = (props) => {
  const items = asArray(props.children).flat().filter(Boolean);
  if(items.length > 1) {
    const first = items.slice(0, -1);
    const last = items[items.length - 1];
    return (
      <span>
        <join with={", "}>{first}</join>
        <comma hide={props.noOxfordComma || items.length < 3} /> {props.conjunction} {last}
      </span>
    );
  } else {
    return Prxmpt.render(items);
  }
};

export * from "./and.js";
export * from "./andor.js";
export * from "./or.js";
export * from "./nor.js";
