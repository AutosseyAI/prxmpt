import {
  a,
  adjective,
  and,
  andor,
  angle,
  b,
  blockquote,
  br,
  bracket,
  capital,
  cb,
  code,
  colon,
  curly,
  dash,
  div,
  doublequote,
  ellipsis,
  empty,
  fraction,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  i,
  img,
  join,
  json,
  lines,
  list,
  lower,
  map,
  na,
  noun,
  num,
  ol,
  or,
  p,
  parens,
  pre,
  s,
  sentence,
  singlequote,
  space,
  span,
  split,
  square,
  tab,
  title,
  trim,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
  xml,
  yaml
} from "./components/index.js";

const types = {
  a,
  adjective,
  and,
  andor,
  angle,
  b,
  blockquote,
  br,
  bracket,
  capital,
  cb,
  code,
  colon,
  curly,
  dash,
  div,
  doublequote,
  ellipsis,
  empty,
  fraction,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  i,
  img,
  join,
  json,
  lines,
  list,
  lower,
  map,
  na,
  noun,
  num,
  ol,
  or,
  p,
  parens,
  pre,
  s,
  sentence,
  singlequote,
  space,
  span,
  split,
  square,
  tab,
  title,
  trim,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
  xml,
  yaml
} as const;

export type Node = string;

export type PromptElement = Node;

export type PropsOf<T extends (...args: any) => PromptElement | PromptElement[]> = Parameters<T>[0];

export type Children = Node | Children[] | undefined;

export namespace JSX {
  export interface IntrinsicElements {
    a: PropsOf<typeof a>;
    adjective: PropsOf<typeof adjective>;
    and: PropsOf<typeof and>;
    andor: PropsOf<typeof andor>;
    angle: PropsOf<typeof angle>;
    b: PropsOf<typeof b>;
    blockquote: PropsOf<typeof blockquote>;
    br: PropsOf<typeof br>;
    bracket: PropsOf<typeof bracket>;
    capital: PropsOf<typeof capital>;
    cb: PropsOf<typeof cb>;
    code: PropsOf<typeof code>;
    colon: PropsOf<typeof colon>;
    curly: PropsOf<typeof curly>;
    dash: PropsOf<typeof dash>;
    div: PropsOf<typeof div>;
    doublequote: PropsOf<typeof doublequote>;
    ellipsis: PropsOf<typeof ellipsis>;
    empty: PropsOf<typeof empty>;
    fraction: PropsOf<typeof fraction>;
    h1: PropsOf<typeof h1>;
    h2: PropsOf<typeof h2>;
    h3: PropsOf<typeof h3>;
    h4: PropsOf<typeof h4>;
    h5: PropsOf<typeof h5>;
    h6: PropsOf<typeof h6>;
    hr: PropsOf<typeof hr>;
    i: PropsOf<typeof i>;
    img: PropsOf<typeof img>;
    join: PropsOf<typeof join>;
    json: PropsOf<typeof json>;
    lines: PropsOf<typeof lines>;
    list: PropsOf<typeof list>;
    lower: PropsOf<typeof lower>;
    ol: PropsOf<typeof ol>;
    or: PropsOf<typeof or>;
    map: PropsOf<typeof map>;
    na: PropsOf<typeof na>;
    noun: PropsOf<typeof noun>;
    num: PropsOf<typeof num>;
    p: PropsOf<typeof p>;
    parens: PropsOf<typeof parens>;
    pre: PropsOf<typeof pre>;
    s: PropsOf<typeof s>;
    sentence: PropsOf<typeof sentence>;
    singlequote: PropsOf<typeof singlequote>;
    space: PropsOf<typeof space>;
    span: PropsOf<typeof span>;
    split: PropsOf<typeof split>;
    square: PropsOf<typeof square>;
    tab: PropsOf<typeof tab>;
    title: PropsOf<typeof title>;
    trim: PropsOf<typeof trim>;
    truncate: PropsOf<typeof truncate>;
    ul: PropsOf<typeof ul>;
    upper: PropsOf<typeof upper>;
    underscore: PropsOf<typeof underscore>;
    union: PropsOf<typeof union>;
    verb: PropsOf<typeof verb>;
    wrap: PropsOf<typeof wrap>;
    xml: PropsOf<typeof xml>;
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

export function render(node: Children) {
  if(Array.isArray(node)) {
    return node.flat().join("");
  } else {
    return node ?? "";
  }
}

export function Fragment(props: { children: Children }): string {
  return render(props.children);
}

export function createElement(
  type: keyof typeof types | Function,
  props: PropsOf<typeof types[keyof typeof types]>,
  ...children: Children[]
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
