import * as Prxmpt from "../../index.js";

export interface MarkedListProps extends Prxmpt.TextProps {
  /**
   * Only include markers if the list contains more than one item.
   * @default false
   */
  onlyMarkIfList?: boolean;
};

function markedList(props: Prxmpt.ChildProps & MarkedListProps, marker: (index: number) => string) {
  return (
    <text {...props}>
      <lined
        map={(item, index, arr) => {
          const hideMarkers = props.onlyMarkIfList && arr.length < 2;
          return (
            <spaced>
              <span hide={hideMarkers}>{marker(index)}</span>
              {item}
            </spaced>
          );
        }}>
        {props.children}
      </lined>
    </text>
  );
}

// Ordered List

/**
 * **Ordered List**
 * ```md
 * 1. Item 1
 * 2. Item 2
 * 3. Item 3
 * ```
 */
export const ol: Prxmpt.PC<MarkedListProps> = (props) => {
  return markedList(props, (index) => `${index+1}.`);
};

// Unordered List

export type ULMarker = "-" | "*" | "+";

export interface ULProps extends  MarkedListProps {
  /**
   * @default "-"
   */
  marker?: ULMarker;
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
  return markedList(props, () => props.marker ?? "-");
};

// Checkbox List

export type CLItem = {
  /**
   * @default false
   */
  checked?: boolean;
  content: Prxmpt.Children;
}

export interface CBProps extends Prxmpt.TextProps {
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
      return `[ ] ${Prxmpt.render(item)}`;
    } else {
      return `[${item?.checked ? "x" : " "}] ${Prxmpt.render(item?.content)}`;
    }
  })
  return (
    <ul {...props}>{children}</ul>
  );
}

// Definition List

export interface DLProps extends Prxmpt.TextProps {
  items: Record<string, Prxmpt.Children>;
  /**
   * Casing to apply to each key.
   * @default undefined
   */
  termCase?: Prxmpt.Casing;
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
        wrap={props.wrap}
        keyCase={props.termCase}
        key={key}>
        {value}
      </kv>
    );
  });
  return (
    <text {...props}>
      <lined
        height={(props.space !== undefined ? props.space : 0) + 1}>
        {children}
      </lined>
    </text>
  );
}
