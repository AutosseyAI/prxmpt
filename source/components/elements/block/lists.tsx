import * as Prxmpt from "../../../index.js";
// Definition List
import { Case } from "../../casing/index.js";

// Ordered List

export const ol: Prxmpt.PC<Prxmpt.BlockProps> = (props) => {
  return (
    <list map={(line, index) => `${index+1}. ${line}`} inline={props.inline}>{props.children}</list>
  );
};

// Unordered List

export type ULChar = "-" | "*" | "+";

export interface ULProps extends Prxmpt.BlockProps {
  /**
   * @default "-"
   */
  char?: ULChar;
}

export const ul: Prxmpt.PC<ULProps> = (props) => {
  return (
    <list map={(line) => `${props.char ?? "-"} ${line}`} inline={props.inline}>{props.children}</list>
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

export interface CBProps extends Prxmpt.BlockProps {
  items: (CBItem | Prxmpt.Children)[];
}

export const cb: Prxmpt.EC<CBProps> = (props) => {
  const children = props.items.map((item) => {
    if(Prxmpt.isChildren(item)) {
      return `[ ] ${Prxmpt.render(item)}`;
    } else {
      return `[${item?.checked ? "x" : " "}] ${Prxmpt.render(item?.content)}`;
    }
  })
  return (
    <ul hide={props.hide} inline={props.inline}>{children}</ul>
  );
}

export interface DLProps extends Prxmpt.BlockProps {
  case?: Case;
  space?: number;
  items: Record<string, Prxmpt.Children>;
};

export const dl: Prxmpt.EC<DLProps> = (props) => {
  const children = Object.entries(props.items).map(([key, value]) => {
    return <colon inline title={<casing case={props.case}>{key}</casing>}>{value}</colon>
  });
  return (
    <lines
      height={props.space !== undefined ? props.space + 1 : undefined}
      hide={props.hide}
      inline={props.inline}>
      {children}
    </lines>
  );
}
