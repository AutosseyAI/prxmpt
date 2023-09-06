import * as Prxmpt from "../../../index.js";

// Ordered List

/**
 * **Ordered List**
 * ```md
 * 1. Item 1
 * 2. Item 2
 * 3. Item 3
 * ```
 */
export const ol: Prxmpt.PC<Prxmpt.BlockProps> = (props) => {
  return (
    <list each={(line, index) => `${index+1}. ${line}`} inline={props.inline}>{props.children}</list>
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

/**
 * **Unordered List**
 * ```md
 * - Item 1
 * - Item 2
 * - Item 3
 * ```
 */
export const ul: Prxmpt.PC<ULProps> = (props) => {
  return (
    <list each={(line) => `${props.char ?? "-"} ${line}`} inline={props.inline}>{props.children}</list>
  );
};

// Checkbox List

export type CLItem = {
  /**
   * @default false
   */
  checked?: boolean;
  content: Prxmpt.Children;
}

export interface CBProps extends Prxmpt.BlockProps {
  items: (CLItem | Prxmpt.Children)[];
}

/**
 * **Checkbox List**
 * ```md
 * - [x] Item 1 (checked)
 * - [ ] Item 2
 * - [ ] Item 3
 * ```
 */
export const cl: Prxmpt.FC<CBProps> = (props) => {
  const children = props.items.map((item) => {
    if(Prxmpt.isChildren(item)) {
      return `- [ ] ${Prxmpt.render(item)}`;
    } else {
      return `- [${item?.checked ? "x" : " "}] ${Prxmpt.render(item?.content)}`;
    }
  })
  return (
    <ul hide={props.hide} inline={props.inline}>{children}</ul>
  );
}

// Definition List

export interface DLProps extends Prxmpt.BlockProps {
  items: Record<string, Prxmpt.Children>;
  /**
   * Casing to apply to each key.
   * @default undefined
   */
  termCase?: Prxmpt.Case;
  /**
   * Number of blank lined to insert between each item.
   * @default 0
   */
  space?: number;
  /**
   * Override the default behavior for wrapping values.
   * @default undefined
   */
  wrap?: boolean;
};

/**
 * **Definition List**
 * ```md
 * Term 1: Definition 1
 * Term 2: Definition 2
 * Term 3:
 * Multi-line
 * Definition 3
 * ```
 */
export const dl: Prxmpt.FC<DLProps> = (props) => {
  const children = Object.entries(props.items).map(([key, value]) => {
    return (
      <kv
        inline
        wrap={props.wrap}
        keyCase={props.termCase}
        key={key}>
        {value}
      </kv>
    );
  });
  return (
    <lined
      height={(props.space !== undefined ? props.space : 0) + 1}
      hide={props.hide}
      inline={props.inline}>
      {children}
    </lined>
  );
}
