import * as Prxmpt from "../../index.js";
// Definition List
import { Case } from "../casing/index.js";

// Ordered List

export const ol: Prxmpt.PC = (props) => {
  return (
    <list map={(line, index) => `${index+1}. ${line}`}>{props.children}</list>
  );
};

// Unordered List

export type ULChar = "-" | "*" | "+";

export interface ULProps {
  /**
   * @default "-"
   */
  char?: ULChar;
}

export const ul: Prxmpt.PC<ULProps> = (props) => {
  return (
    <list map={(line) => `${props.char ?? "-"} ${line}`}>{props.children}</list>
  );
};

// Checkboxes

export type CBItem = {
  /**
   * @default false
   */
  checked?: boolean;
  content: Prxmpt.Children;
}

export interface CBProps {
  items: (CBItem | Prxmpt.Children)[];
}

export const cb: Prxmpt.EC<CBProps> = (props) => {
  const children = props.items.map((item) => {
    if(typeof item === "string" || Array.isArray(item)) {
      return `[ ] ${Prxmpt.render(item)}`;
    } else {
      return `[${item?.checked ? "x" : " "}] ${Prxmpt.render(item?.content)}`;
    }
  })
  return (
    <ul>{children}</ul>
  );
}

export interface DLProps {
  case?: Case;
  space?: number;
  items: Record<string, Prxmpt.Children>;
};

export const dl: Prxmpt.EC<DLProps> = (props) => {
  const children = Object.entries(props.items).map(([key, value]) => {
    return <colon title={<casing case={props.case}>{key}</casing>}>{value}</colon>
  });
  return (
    <lines height={props.space !== undefined ? props.space + 1 : undefined}>{children}</lines>
  );
}
