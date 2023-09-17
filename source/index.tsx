import {
  a,
  and,
  andor,
  angle,
  ask,
  b,
  blockquote,
  bq,
  br,
  cap,
  cl,
  code,
  comma,
  commaed,
  comment,
  curly,
  dash,
  date,
  datetime,
  day,
  details,
  div,
  dl,
  dq,
  elapsed,
  ellipsis,
  empty,
  exclaim,
  frame,
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
  json,
  kv,
  lined,
  millisecond,
  minute,
  month,
  na,
  nor,
  num,
  ol,
  or,
  p,
  parens,
  pre,
  q,
  s,
  second,
  sectioned,
  space,
  spaced,
  span,
  sq,
  square,
  state,
  tab,
  tag,
  tbq,
  tdq,
  text,
  time,
  tq,
  tsq,
  ul,
  underscore,
  union,
  yaml,
  year
} from "./components/index.js";

const types = {
  a,
  and,
  andor,
  angle,
  ask,
  b,
  blockquote,
  bq,
  br,
  cap,
  cl,
  code,
  comma,
  commaed,
  comment,
  curly,
  dash,
  date,
  datetime,
  day,
  details,
  div,
  dl,
  dq,
  elapsed,
  ellipsis,
  empty,
  exclaim,
  frame,
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
  json,
  kv,
  lined,
  millisecond,
  minute,
  month,
  na,
  nor,
  num,
  ol,
  or,
  p,
  parens,
  pre,
  q,
  s,
  second,
  sectioned,
  space,
  spaced,
  span,
  sq,
  square,
  state,
  tab,
  tag,
  tbq,
  tdq,
  text,
  time,
  tq,
  tsq,
  ul,
  underscore,
  union,
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
export type Component = (props: any) => JSX.Element;

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
  (props: P): JSX.Element;
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

/**
 * https://www.typescriptlang.org/docs/handbook/jsx.html
 */
export namespace JSX {
  export interface IntrinsicElements {
    a: PropsOf<typeof a>;
    and: PropsOf<typeof and>;
    andor: PropsOf<typeof andor>;
    angle: PropsOf<typeof angle>;
    ask: PropsOf<typeof ask>;
    b: PropsOf<typeof b>;
    blockquote: PropsOf<typeof blockquote>;
    bq: PropsOf<typeof bq>;
    br: PropsOf<typeof br>;
    cap: PropsOf<typeof cap>;
    cl: PropsOf<typeof cl>;
    code: PropsOf<typeof code>;
    comma: PropsOf<typeof comma>;
    commaed: PropsOf<typeof commaed>,
    comment: PropsOf<typeof comment>;
    curly: PropsOf<typeof curly>;
    dash: PropsOf<typeof dash>;
    date: PropsOf<typeof date>;
    datetime: PropsOf<typeof datetime>;
    day: PropsOf<typeof day>;
    details: PropsOf<typeof details>;
    div: PropsOf<typeof div>;
    dl: PropsOf<typeof dl>;
    dq: PropsOf<typeof dq>;
    elapsed: PropsOf<typeof elapsed>;
    ellipsis: PropsOf<typeof ellipsis>;
    empty: PropsOf<typeof empty>;
    exclaim: PropsOf<typeof exclaim>;
    frame: PropsOf<typeof frame>;
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
    json: PropsOf<typeof json>;
    kv: PropsOf<typeof kv>;
    lined: PropsOf<typeof lined>;
    ol: PropsOf<typeof ol>;
    or: PropsOf<typeof or>;
    millisecond: PropsOf<typeof millisecond>;
    minute: PropsOf<typeof minute>;
    month: PropsOf<typeof month>;
    na: PropsOf<typeof na>;
    nor: PropsOf<typeof nor>;
    num: PropsOf<typeof num>;
    p: PropsOf<typeof p>;
    parens: PropsOf<typeof parens>;
    pre: PropsOf<typeof pre>;
    q: PropsOf<typeof q>;
    s: PropsOf<typeof s>;
    second: PropsOf<typeof second>;
    sectioned: PropsOf<typeof sectioned>;
    space: PropsOf<typeof space>;
    spaced: PropsOf<typeof spaced>;
    span: PropsOf<typeof span>;
    sq: PropsOf<typeof sq>;
    square: PropsOf<typeof square>;
    state: PropsOf<typeof state>;
    tab: PropsOf<typeof tab>;
    tag: PropsOf<typeof tag>;
    tbq: PropsOf<typeof tbq>;
    tdq: PropsOf<typeof tdq>;
    text: PropsOf<typeof text>;
    time: PropsOf<typeof time>;
    tq: PropsOf<typeof tq>;
    tsq: PropsOf<typeof tsq>;
    ul: PropsOf<typeof ul>;
    underscore: PropsOf<typeof underscore>;
    union: PropsOf<typeof union>;
    yaml: PropsOf<typeof yaml>;
    year: PropsOf<typeof year>;
  }
  /**
   * The result of a JSX expression.
   */
  export type Element = Option<string>;
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

export function hasChildren(props: Partial<BaseProps>) {
  return props.children !== undefined &&
  props.children !== null &&
    (!Array.isArray(props.children) || props.children.length > 0);
}

/**
 * Returns a string representation of the provided `children`.
 * If the children resolve to `undefined`, an empty string is returned.
 */
export function render(children: Children) {
  if(Array.isArray(children)) {
    // `null` and `undefined` are filtered out by `.join("")`
    return children.flat().join("");
  } else {
    return (children ?? "").toString();
  }
}

export function split(children: Children, separator?: Children) {
  if(separator !== undefined) {
    const splitter = render(separator);
    const string = render(children);
    return string.split(splitter);
  } else {
    return [render(children)];
  }
}

export function lines(children: Children) {
  return split(children, "\n");
}

export function spaces(children: Children) {
  return split(children, " ");
}

export function commas(children: Children) {
  return split(children, ",");
}

export function Fragment(props: BaseProps): string {
  return render(props.children);
}

/**
 * `props.children` is overwritten if children are provided.
 */
function mergeProps(props: PropsOf<typeof types[keyof typeof types]>, children: Children[]) {
  if(children.length > 0) {
    return {
      ...props,
      children: children.flat()
    };
  } else {
    return props ?? {};
  }
}

export function createElement(
  type: keyof typeof types | Component,
  props: PropsOf<typeof types[keyof typeof types]>,
  ...children: Children[]
): JSX.Element {
  const fullProps = mergeProps(props, children);
  if(typeof type === "function") {
		return type(fullProps);
	} else {
    const component = types[type] as Component | undefined;
    if(component) {
      return component(fullProps);
    }
  }
	return undefined;
}

const Prxmpt = {
  createElement,
  Fragment
};

export default Prxmpt;

export * from "./components/index.js";
