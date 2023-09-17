import asArray from "as-typed-array";
import * as Prxmpt from "../../../index.js";

export interface SetProps extends Prxmpt.TextProps {
  conjunction: string;
  /**
   * @default false
   */
  noOxfordComma?: boolean;
}

function set(props: SetProps & Prxmpt.ChildProps) {
  const items = asArray(props.children).flat().filter(Boolean);
  if(items.length > 1) {
    const first = items.slice(0, -1);
    const last = items[items.length - 1];
    return (
      <text {...props}>
        <text join={", "}>{first}</text>
        <comma hide={props.noOxfordComma || items.length < 3} /> {props.conjunction} {last}
      </text>
    );
  } else {
    return Prxmpt.render(items);
  }
};

export const and: Prxmpt.PC = (props) => {
  return set({ ...props, conjunction: "and" });
};

export const andor: Prxmpt.PC = (props) => {
  return set({ ...props, conjunction: "and/or" });
};

export const nor: Prxmpt.PC = (props) => {
  return set({ ...props, conjunction: "nor" });
};

export const or: Prxmpt.PC = (props) => {
  return set({ ...props, conjunction: "or" });
};

