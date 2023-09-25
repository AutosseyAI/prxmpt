/* eslint-disable max-lines */
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
  capital,
  cl,
  code,
  comment,
  csl,
  curly,
  date,
  datetime,
  day,
  div,
  dl,
  dq,
  duration,
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
  lower,
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
  priority,
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
  title,
  tq,
  trim,
  tsq,
  ul,
  union,
  upper,
  yaml,
  year
} from "./elements/index.js";
import { chars, commas, lines, paragraphs, spaces, split } from "./splitters.js";

const elements = {
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
  capital,
  cl,
  code,
  csl,
  comment,
  curly,
  date,
  datetime,
  day,
  div,
  dl,
  dq,
  duration,
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
  lower,
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
  priority,
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
  title,
  tq,
  trim,
  tsq,
  ul,
  union,
  upper,
  yaml,
  year
} as const;

type Option<T> = T | undefined;

namespace Prxmpt {
  export type Element = Option<string>;
  /**
   * The name of a built-in element.
   */
  export type ElementName = keyof typeof elements;
  /**
   * Represents values that can be returned from a `Component`.
   */
  export type Node = Element | Element[];

  /**
   * A function that takes an argument `props`, and returns a `Node` or `undefined.
   */
  export type Component = (props: any) => Element;

  /**
   * Extracts the type of a `Component`'s `props` parameter.
   */
  export type PropsOf<T extends Component> = Parameters<T>[0];

  /**
   * - Represents values that can be passed as children to a `Component`.
   * - Represents values that can be rendered by `Prxmpt.render`.
   */
  export type Children = Option<Children[] | string | number | boolean | null>;

  export interface ChildProps {
    children: Children;
  }

  /**
   * **Function Component**
   *
   * A `Component` that does not have a `children` property by default.
   */
  export type FC<P = Record<string, never>> = (props: P) => Element;

  /**
   * **Parent Component**
   *
   * A `Component` with a required `children` property.
   */
  export interface PC<P = Record<string, never>> extends FC<P & ChildProps> {}

  /**
   * **Optional Children Component**
   *
   * A `Component` with an optional `children` property.
   */
  export interface OC<P = Record<string, never>> extends FC<Partial<ChildProps> & P> {}

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
    capital: PropsOf<typeof capital>;
    cl: PropsOf<typeof cl>;
    code: PropsOf<typeof code>;
    csl: PropsOf<typeof csl>,
    comment: PropsOf<typeof comment>;
    curly: PropsOf<typeof curly>;
    date: PropsOf<typeof date>;
    datetime: PropsOf<typeof datetime>;
    day: PropsOf<typeof day>;
    div: PropsOf<typeof div>;
    dl: PropsOf<typeof dl>;
    dq: PropsOf<typeof dq>;
    duration: PropsOf<typeof duration>;
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
    lower: PropsOf<typeof lower>;
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
    priority: PropsOf<typeof priority>;
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
    title: PropsOf<typeof title>;
    tq: PropsOf<typeof tq>;
    trim: PropsOf<typeof trim>;
    tsq: PropsOf<typeof tsq>;
    ul: PropsOf<typeof ul>;
    union: PropsOf<typeof union>;
    upper: PropsOf<typeof upper>;
    yaml: PropsOf<typeof yaml>;
    year: PropsOf<typeof year>;
  }

  // JSX

  export namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    export interface IntrinsicElements extends Prxmpt.IntrinsicElements {}
    /**
     * The result of a JSX expression.
     */
    // eslint-disable-next-line @typescript-eslint/no-shadow
    export type Element = Prxmpt.Element;
    export interface ElementAttributesProperty {
      props: any; // specify the property name to use
    }
    export interface ElementChildrenAttribute {
      children: Prxmpt.Children; // specify children name to use
    }
  }
}

// Re-export types to support `import * as Prxmpt from "prxmpt";` syntax

export type Element = Prxmpt.Element;
export type ElementName = Prxmpt.ElementName;
export type Node = Prxmpt.Node;
export type Component = Prxmpt.Component;
export type PropsOf<T extends Prxmpt.Component> = Prxmpt.PropsOf<T>;
export type Children = Prxmpt.Children;
export type ChildProps = Prxmpt.ChildProps;
export type FC<P = Record<string, never>> = Prxmpt.FC<P>;
export type PC<P = Record<string, never>> = Prxmpt.PC<P>;
export type OC<P = Record<string, never>> = Prxmpt.OC<P>;

// JSX

declare global {
  /**
   * https://www.typescriptlang.org/docs/handbook/jsx.html
   */
  export namespace JSX {
    export interface IntrinsicElements extends Prxmpt.IntrinsicElements {}
    /**
     * The result of a JSX expression.
     */
    export type Element = Prxmpt.Element;
    export interface ElementAttributesProperty {
      props: any; // specify the property name to use
    }
    export interface ElementChildrenAttribute {
      children: Prxmpt.Children; // specify children name to use
    }
  }
}


/**
 * Returns `true` if the provided value is of type `Children`.
 */
export function isChildren(value: any): value is Prxmpt.Children {
  return (
    typeof value === "string"
    || typeof value === "number"
    || typeof value === "boolean"
    || value === null
    || value === undefined
    || (Array.isArray(value) && value.every(isChildren))
  );
}

/**
 * Returns `true` if the provided `props` have children to render.
 */
export function hasChildren(props: Partial<Prxmpt.ChildProps> | null): props is ChildProps {
  return props?.children !== undefined
    && props.children !== null
    && (!Array.isArray(props.children) || props.children.length > 0);
}

/**
 * Returns a string representation of the provided `children`.
 * If the children resolve to `undefined`, an empty string is returned.
 */
export function render(children: Prxmpt.Children) {
  if(Array.isArray(children)) {
    // `null` and `undefined` are filtered out by `.join("")`
    return children.flat().join("");
  } else {
    return (children ?? "").toString();
  }
}

export function Fragment(props: Prxmpt.ChildProps): string {
  return render(props.children);
}

/**
 * Note: `props.children` is overwritten if children are provided.
 */
function mergeProps(props: PropsOf<typeof elements[Prxmpt.ElementName]> | null, children: Prxmpt.Children[]) {
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
  type: Prxmpt.ElementName | Prxmpt.Component,
  props: PropsOf<typeof elements[Prxmpt.ElementName]> | null,
  ...children: Prxmpt.Children[]
): Prxmpt.Element {
  const fullProps = mergeProps(props, children);
  if(typeof type === "function") {
    return type(fullProps);
  } else {
    const component = elements[type] as Prxmpt.Component | undefined;
    if(component) {
      return component(fullProps);
    }
  }
  return undefined;
}

const Prxmpt = {
  // Rendering
  Fragment,
  createElement,
  render,
  // Children
  isChildren,
  hasChildren,
  // Splitters
  split,
  paragraphs,
  lines,
  spaces,
  chars,
  commas
};

export default Prxmpt;

export * from "./elements/index.js";
export * from "./splitters.js";
