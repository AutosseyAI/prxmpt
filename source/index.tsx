import {
  a,
  adjective,
  and,
  andor,
  angle,
  attributes,
  b,
  blockquote,
  br,
  bracket,
  btq,
  capital,
  casing,
  cl,
  code,
  comma,
  commaed,
  commas,
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
  frame,
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
  kv,
  lined,
  lines,
  list,
  lower,
  map,
  millisecond,
  minute,
  month,
  na,
  nor,
  noun,
  num,
  ol,
  or,
  p,
  paragraphs,
  parens,
  pre,
  prefix,
  q,
  repeat,
  s,
  second,
  sectioned,
  sentence,
  set,
  space,
  spaced,
  spaces,
  span,
  split,
  sq,
  square,
  stq,
  suffix,
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
  yaml,
  year
} from "./components/index.js";

const types = {
  a,
  adjective,
  and,
  andor,
  angle,
  attributes,
  b,
  blockquote,
  br,
  bracket,
  btq,
  capital,
  casing,
  cl,
  code,
  comma,
  commaed,
  commas,
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
  frame,
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
  kv,
  lined,
  lines,
  list,
  lower,
  map,
  millisecond,
  minute,
  month,
  na,
  nor,
  noun,
  num,
  ol,
  or,
  p,
  paragraphs,
  parens,
  pre,
  prefix,
  q,
  repeat,
  s,
  set,
  second,
  sectioned,
  sentence,
  space,
  spaced,
  spaces,
  span,
  split,
  suffix,
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
  yaml,
  year
} as const;

type Option<T> = T | undefined;

/**
 * Represents values that can be returned from a `Component`.
 */
export type Node = JSX.Element | JSX.Element[];

/**
 * A function that takes an argument `props`, and returns a `Node` or `undefined.
 */
export type Component = (props: any) => Option<Node>;

/**
 * Extracts the type of a `Component`'s `props` parameter.
 */
export type PropsOf<T extends Component> = Parameters<T>[0];

/**
 * - Represents values that can be passed as children to a `Component`.
 * - Represents values that can be rendered by `Prxmpt.render`.
 */
export type Children = Option<Children[] | string | number | boolean | null>;

export interface BaseProps {
  children: Children;
};

/**
 * **Function Component**
 * 
 * A `Component` that does not have a `children` property by default.
 */
export interface FC<P = {}> {
  (props: P): Option<Node>;
}

/**
 * **Parent Component**
 * 
 * A `Component` with a required `children` property.
 */
export interface PC<P = {}> extends FC<P & BaseProps> {};

/**
 * **Optional Children Component**
 * 
 * A `Component` with an optional `children` property.
 */
export interface OC<P = {}> extends FC<Partial<BaseProps> & P> {};

export namespace JSX {
  export interface IntrinsicElements {
    a: PropsOf<typeof a>;
    adjective: PropsOf<typeof adjective>;
    and: PropsOf<typeof and>;
    andor: PropsOf<typeof andor>;
    angle: PropsOf<typeof angle>;
    attributes: PropsOf<typeof attributes>;
    b: PropsOf<typeof b>;
    blockquote: PropsOf<typeof blockquote>;
    br: PropsOf<typeof br>;
    bracket: PropsOf<typeof bracket>;
    btq: PropsOf<typeof btq>;
    capital: PropsOf<typeof capital>;
    casing: PropsOf<typeof casing>;
    cl: PropsOf<typeof cl>;
    code: PropsOf<typeof code>;
    comma: PropsOf<typeof comma>;
    commaed: PropsOf<typeof commaed>,
    commas: PropsOf<typeof commas>,
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
    frame: PropsOf<typeof frame>;
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
    kv: PropsOf<typeof kv>;
    lined: PropsOf<typeof lined>;
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
    nor: PropsOf<typeof nor>;
    noun: PropsOf<typeof noun>;
    num: PropsOf<typeof num>;
    p: PropsOf<typeof p>;
    paragraphs: PropsOf<typeof paragraphs>;
    parens: PropsOf<typeof parens>;
    pre: PropsOf<typeof pre>;
    prefix: PropsOf<typeof prefix>;
    q: PropsOf<typeof q>;
    repeat: PropsOf<typeof repeat>;
    s: PropsOf<typeof s>;
    second: PropsOf<typeof second>;
    sectioned: PropsOf<typeof sectioned>;
    sentence: PropsOf<typeof sentence>;
    set: PropsOf<typeof set>;
    space: PropsOf<typeof space>;
    spaced: PropsOf<typeof spaced>;
    spaces: PropsOf<typeof spaces>;
    span: PropsOf<typeof span>;
    split: PropsOf<typeof split>;
    sq: PropsOf<typeof sq>;
    square: PropsOf<typeof square>;
    stq: PropsOf<typeof stq>;
    suffix: PropsOf<typeof suffix>;
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

/**
 * Returns `true` if the provided value is of type `Children`.
 */
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

/**
 * Returns a string representation of the provided `children`.
 * If the children resolve to `undefined`, an empty string is returned.
 */
export function render(children: Children) {
  if(Array.isArray(children)) {
    return children.flat().join("");
  } else {
    return (children ?? "").toString();
  }
}

export function Fragment(props: BaseProps): string {
  return render(props.children);
}

export function createElement(
  type: keyof typeof types | Component,
  props: PropsOf<typeof types[keyof typeof types]>,
  ...children: Children[]
): Node {
  const fullProps = { children: children.flat(), ...props };
  if(typeof type === "function") {
		return type(fullProps) ?? "";
	} else {
    const component = types[type] as Component | undefined;
    if(component) {
      return component(fullProps) ?? "";
    }
  }
	return "";
}

const Prxmpt = {
  createElement,
  Fragment
};

export default Prxmpt;

export * from "./components/index.js";
