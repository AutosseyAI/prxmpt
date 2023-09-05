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
  details,
  div,
  dl,
  double,
  dq,
  dtq,
  elapsed,
  ellipsis,
  empty,
  fraction,
  h,
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
  indent,
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
  repeat,
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
  tag,
  time,
  title,
  tq,
  trim,
  triple,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
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
  details,
  div,
  dl,
  double,
  dtq,
  dq,
  elapsed,
  ellipsis,
  empty,
  fraction,
  h,
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
  indent,
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
  repeat,
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
  tag,
  time,
  title,
  tq,
  trim,
  triple,
  truncate,
  ul,
  underscore,
  union,
  upper,
  verb,
  wrap,
  yaml,
  year
} as const;

/**
 * `Node` represents values that can be returned from a component.
 */
export type Node = JSX.Element | JSX.Element[] | undefined;

export type Component = (props: any) => Node;

/**
 * Extracts the props type from a component.
 */
export type PropsOf<T extends Component> = Parameters<T>[0];

/**
 * `Children` represents the values that can be passed as children to a component.
 */
export type Children = Children[] | string | number | boolean | null | undefined;

export interface BaseProps {
  children: Children;
};

/**
 * A component that requires children.
 */
export interface FunctionComponent<P = {}> {
  (props: BaseProps & P): Node;
}
/**
 * A component that requires children.
 */
export type PC<P = {}> = FunctionComponent<P>;

/**
 * A component with optional children.
 */
export interface OptionalChildrenComponent<P = {}> {
  (props: Partial<BaseProps> & P): Node;
}
/**
 * A component with optional children.
 */
export type OC<P = {}> = OptionalChildrenComponent<P>;

/**
 * A component that does have children.
 */
export interface EmptyComponent<P = {}> {
  (props: P): JSX.Element;
}
/**
 * A component that does have children.
 */
export type EC<P = {}> = EmptyComponent<P>;

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
    details: PropsOf<typeof details>;
    div: PropsOf<typeof div>;
    dl: PropsOf<typeof dl>;
    double: PropsOf<typeof double>;
    dq: PropsOf<typeof dq>;
    dtq: PropsOf<typeof dtq>;
    elapsed: PropsOf<typeof elapsed>;
    ellipsis: PropsOf<typeof ellipsis>;
    empty: PropsOf<typeof empty>;
    fraction: PropsOf<typeof fraction>;
    h: PropsOf<typeof h>;
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
    indent: PropsOf<typeof indent>;
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
    repeat: PropsOf<typeof repeat>;
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
    tag: PropsOf<typeof tag>;
    time: PropsOf<typeof time>;
    title: PropsOf<typeof title>;
    triple: PropsOf<typeof triple>;
    tq: PropsOf<typeof tq>;
    trim: PropsOf<typeof trim>;
    truncate: PropsOf<typeof truncate>;
    ul: PropsOf<typeof ul>;
    upper: PropsOf<typeof upper>;
    underscore: PropsOf<typeof underscore>;
    union: PropsOf<typeof union>;
    verb: PropsOf<typeof verb>;
    wrap: PropsOf<typeof wrap>;
    yaml: PropsOf<typeof yaml>;
    year: PropsOf<typeof year>;
  }
  export type Element = string;
  export interface ElementAttributesProperty {
    props: any; // specify the property name to use
  }
  export interface ElementChildrenAttribute {
    children: Children; // specify children name to use
  }
}

export function isChildren(value: any): value is Children {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.every(isChildren))
  );
}

export function render(children: Children) {
  if(Array.isArray(children)) {
    return children.flat().join("");
  } else {
    return (children ?? "").toString();
  }
}

export function Fragment(props: { children: Children }): string {
  return render(props.children);
}

export function createElement(
  type: keyof typeof types | Function,
  props: PropsOf<typeof types[keyof typeof types]>,
  ...children: Children[]
): Node {
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

export * from "./components/index.js";
