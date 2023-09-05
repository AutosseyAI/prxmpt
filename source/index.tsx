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
  btq,
  capital,
  casing,
  cb,
  code,
  colon,
  comment,
  curly,
  dash,
  date,
  datetime,
  day,
  div,
  dl,
  dq,
  dtq,
  elapsed,
  ellipsis,
  empty,
  fraction,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hour,
  hr,
  i,
  img,
  join,
  json,
  lines,
  list,
  lower,
  map,
  millisecond,
  minute,
  month,
  na,
  noun,
  num,
  ol,
  or,
  p,
  parens,
  pre,
  q,
  s,
  second,
  sections,
  sentence,
  space,
  span,
  split,
  sq,
  square,
  stq,
  tab,
  time,
  title,
  tq,
  trim,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
  xml,
  yaml,
  year
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
  btq,
  capital,
  casing,
  cb,
  code,
  colon,
  comment,
  curly,
  dash,
  date,
  datetime,
  day,
  div,
  dl,
  dtq,
  dq,
  elapsed,
  ellipsis,
  empty,
  fraction,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hour,
  hr,
  i,
  img,
  join,
  json,
  lines,
  list,
  lower,
  map,
  millisecond,
  minute,
  month,
  na,
  noun,
  num,
  ol,
  or,
  p,
  q,
  parens,
  pre,
  s,
  second,
  sections,
  sentence,
  space,
  span,
  split,
  sq,
  square,
  stq,
  tab,
  time,
  title,
  tq,
  trim,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
  xml,
  yaml,
  year
} as const;

export type Node = string | number;

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
    btq: PropsOf<typeof btq>;
    capital: PropsOf<typeof capital>;
    casing: PropsOf<typeof casing>;
    cb: PropsOf<typeof cb>;
    code: PropsOf<typeof code>;
    colon: PropsOf<typeof colon>;
    comment: PropsOf<typeof comment>;
    curly: PropsOf<typeof curly>;
    dash: PropsOf<typeof dash>;
    date: PropsOf<typeof date>;
    datetime: PropsOf<typeof datetime>;
    day: PropsOf<typeof day>;
    div: PropsOf<typeof div>;
    dl: PropsOf<typeof dl>;
    dq: PropsOf<typeof dq>;
    dtq: PropsOf<typeof dtq>;
    elapsed: PropsOf<typeof elapsed>;
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
    hour: PropsOf<typeof hour>;
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
    millisecond: PropsOf<typeof millisecond>;
    minute: PropsOf<typeof minute>;
    month: PropsOf<typeof month>;
    na: PropsOf<typeof na>;
    noun: PropsOf<typeof noun>;
    num: PropsOf<typeof num>;
    p: PropsOf<typeof p>;
    parens: PropsOf<typeof parens>;
    pre: PropsOf<typeof pre>;
    q: PropsOf<typeof q>;
    s: PropsOf<typeof s>;
    second: PropsOf<typeof second>;
    sections: PropsOf<typeof sections>;
    sentence: PropsOf<typeof sentence>;
    space: PropsOf<typeof space>;
    span: PropsOf<typeof span>;
    split: PropsOf<typeof split>;
    sq: PropsOf<typeof sq>;
    square: PropsOf<typeof square>;
    stq: PropsOf<typeof stq>;
    tab: PropsOf<typeof tab>;
    time: PropsOf<typeof time>;
    title: PropsOf<typeof title>;
    tq: PropsOf<typeof tq>;
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
    year: PropsOf<typeof year>;
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

export interface OptionalChildrenComponent<P = {}> {
  (props: Partial<BaseProps> & P): JSX.Element | JSX.Element[];
}

export interface EmptyComponent<P = {}> {
  (props: P): JSX.Element;
}

export type PC<P = {}> = PromptComponent<P>;

export type OC<P = {}> = OptionalChildrenComponent<P>;

export type EC<P = {}> = EmptyComponent<P>;

export function render(node: Children) {
  if(Array.isArray(node)) {
    return node.flat().join("");
  } else {
    return (node ?? "").toString();
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
