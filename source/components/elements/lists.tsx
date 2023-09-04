import * as Prxmpt from "../../index.js";

export const ol: Prxmpt.PC = (props) => {
  return (
    <list map={(line, index) => `${index+1}. ${line}`}>{props.children}</list>
  );
};

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
