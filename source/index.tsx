import {
  a,
  angle,
  b,
  blockquote,
  br,
  bracket,
  capital,
  code,
  colon,
  curly,
  div,
  doublequote,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  i,
  join,
  json,
  lines,
  list,
  lower,
  map,
  ol,
  p,
  parens,
  pre,
  s,
  singlequote,
  space,
  span,
  split,
  square,
  tab,
  truncate,
  ul,
  union,
  upper,
  wrap,
  yaml
} from "./components";

export type Node = string | null;

export type PromptElement = Node;

export type PropsOf<T extends (...args: any) => PromptElement | PromptElement[]> = Parameters<T>[0];

export type Children = Node | Node[];

export namespace JSX {
  export interface IntrinsicElements {
    a: PropsOf<typeof a>;
    angle: PropsOf<typeof angle>;
    b: PropsOf<typeof b>;
    blockquote: PropsOf<typeof blockquote>;
    br: PropsOf<typeof br>;
    bracket: PropsOf<typeof bracket>;
    capital: PropsOf<typeof capital>;
    code: PropsOf<typeof code>;
    colon: PropsOf<typeof colon>;
    curly: PropsOf<typeof curly>;
    div: PropsOf<typeof div>;
    doublequote: PropsOf<typeof doublequote>;
    h1: PropsOf<typeof h1>;
    h2: PropsOf<typeof h2>;
    h3: PropsOf<typeof h3>;
    h4: PropsOf<typeof h4>;
    h5: PropsOf<typeof h5>;
    h6: PropsOf<typeof h6>;
    hr: PropsOf<typeof hr>;
    i: PropsOf<typeof i>;
    join: PropsOf<typeof join>;
    json: PropsOf<typeof json>;
    lines: PropsOf<typeof lines>;
    list: PropsOf<typeof list>;
    lower: PropsOf<typeof lower>;
    ol: PropsOf<typeof ol>;
    map: PropsOf<typeof map>;
    p: PropsOf<typeof p>;
    parens: PropsOf<typeof parens>;
    pre: PropsOf<typeof pre>;
    s: PropsOf<typeof s>;
    singlequote: PropsOf<typeof singlequote>;
    space: PropsOf<typeof space>;
    span: PropsOf<typeof span>;
    split: PropsOf<typeof split>;
    square: PropsOf<typeof square>;
    tab: PropsOf<typeof tab>;
    truncate: PropsOf<typeof truncate>;
    ul: PropsOf<typeof ul>;
    upper: PropsOf<typeof upper>;
    union: PropsOf<typeof union>;
    wrap: PropsOf<typeof wrap>;
    yaml: PropsOf<typeof yaml>;
  }
  export type Element = PromptElement;
  export interface ElementAttributesProperty {
    props: BaseProps; // specify the property name to use
  }
  export interface ElementChildrenAttribute {
    children: Children; // specify children name to use
  }
}

type BaseProps = {
  children: Children;
};

export interface PromptComponent<P = {}> {
  (props: BaseProps & P): JSX.Element | JSX.Element[];
}

export interface EmptyComponent<P = {}> {
  (props: P): JSX.Element;
}

export type PC<P = {}> = PromptComponent<P>;

export type EC<P = {}> = EmptyComponent<P>;

export function render(node: Node) {
  return node ?? "";
}

export function Fragment(props: { children: Children | Children[] }): string {
  if(Array.isArray(props.children)) {
    return props
      .children
      .flat()
      .map((node) => render(node))
      .join("");
  } else {
    return render(props.children);
  }
}

const types = {
  a,
  angle,
  b,
  blockquote,
  br,
  bracket,
  capital,
  code,
  colon,
  curly,
  div,
  doublequote,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  i,
  join,
  json,
  lines,
  list,
  lower,
  map,
  ol,
  p,
  parens,
  pre,
  s,
  singlequote,
  space,
  span,
  split,
  square,
  tab,
  truncate,
  ul,
  union,
  upper,
  wrap,
  yaml
} as const;

export function createElement(
  type: keyof typeof types | Function,
  props: PropsOf<typeof types[keyof typeof types]>,
  ...children: Node[] | Node[][]
): PromptElement | PromptElement[] {
  if(typeof type === "function") {
		return type({ children: children.flat(), ...props });
	} else {
    const component = types[type];
    if(component) {
      return (component as any)({ children: children.flat(), ...props });
    }
  }
	return type;
}

const Prxmpt = {
  createElement,
  Fragment
};

export default Prxmpt;
