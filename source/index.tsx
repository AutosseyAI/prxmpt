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
  cl,
  code,
  commaed,
  comment,
  curly,
  date,
  datetime,
  day,
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
  tq,
  trim,
  tsq,
  ul,
  union,
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
  cl,
  code,
  commaed,
  comment,
  curly,
  date,
  datetime,
  day,
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
  tq,
  trim,
  tsq,
  ul,
  union,
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
  export interface FC<P = {}> {
    (props: P): Element;
  }

  /**
   * **Parent Component**
   *
   * A `Component` with a required `children` property.
   */
  export interface PC<P = {}> extends FC<P & ChildProps> {}

  /**
   * **Optional Children Component**
   *
   * A `Component` with an optional `children` property.
   */
  export interface OC<P = {}> extends FC<Partial<ChildProps> & P> {}
}

// Re-export types to support `import * as Prxmpt from "prxmpt";` syntax

export type Element = Prxmpt.Element;
export type ElementName = Prxmpt.ElementName;
export type Node = Prxmpt.Node;
export type Component = Prxmpt.Component;
export type PropsOf<T extends Prxmpt.Component> = Prxmpt.PropsOf<T>;
export type Children = Prxmpt.Children;
export type ChildProps = Prxmpt.ChildProps;
export type FC<P = {}> = Prxmpt.FC<P>;
export type PC<P = {}> = Prxmpt.PC<P>;
export type OC<P = {}> = Prxmpt.OC<P>;

// JSX

declare global {
  /**
   * https://www.typescriptlang.org/docs/handbook/jsx.html
   */
  export namespace JSX {
    export interface IntrinsicElements {
      a: Prxmpt.PropsOf<typeof a>;
      and: Prxmpt.PropsOf<typeof and>;
      andor: Prxmpt.PropsOf<typeof andor>;
      angle: Prxmpt.PropsOf<typeof angle>;
      ask: Prxmpt.PropsOf<typeof ask>;
      b: Prxmpt.PropsOf<typeof b>;
      blockquote: Prxmpt.PropsOf<typeof blockquote>;
      bq: Prxmpt.PropsOf<typeof bq>;
      br: Prxmpt.PropsOf<typeof br>;
      cap: Prxmpt.PropsOf<typeof cap>;
      cl: Prxmpt.PropsOf<typeof cl>;
      code: Prxmpt.PropsOf<typeof code>;
      commaed: Prxmpt.PropsOf<typeof commaed>,
      comment: Prxmpt.PropsOf<typeof comment>;
      curly: Prxmpt.PropsOf<typeof curly>;
      date: Prxmpt.PropsOf<typeof date>;
      datetime: Prxmpt.PropsOf<typeof datetime>;
      day: Prxmpt.PropsOf<typeof day>;
      div: Prxmpt.PropsOf<typeof div>;
      dl: Prxmpt.PropsOf<typeof dl>;
      dq: Prxmpt.PropsOf<typeof dq>;
      elapsed: Prxmpt.PropsOf<typeof elapsed>;
      ellipsis: Prxmpt.PropsOf<typeof ellipsis>;
      empty: Prxmpt.PropsOf<typeof empty>;
      exclaim: Prxmpt.PropsOf<typeof exclaim>;
      frame: Prxmpt.PropsOf<typeof frame>;
      h1: Prxmpt.PropsOf<typeof h1>;
      h2: Prxmpt.PropsOf<typeof h2>;
      h3: Prxmpt.PropsOf<typeof h3>;
      h4: Prxmpt.PropsOf<typeof h4>;
      h5: Prxmpt.PropsOf<typeof h5>;
      h6: Prxmpt.PropsOf<typeof h6>;
      hr: Prxmpt.PropsOf<typeof hr>;
      hour: Prxmpt.PropsOf<typeof hour>;
      i: Prxmpt.PropsOf<typeof i>;
      img: Prxmpt.PropsOf<typeof img>;
      json: Prxmpt.PropsOf<typeof json>;
      kv: Prxmpt.PropsOf<typeof kv>;
      lined: Prxmpt.PropsOf<typeof lined>;
      ol: Prxmpt.PropsOf<typeof ol>;
      or: Prxmpt.PropsOf<typeof or>;
      millisecond: Prxmpt.PropsOf<typeof millisecond>;
      minute: Prxmpt.PropsOf<typeof minute>;
      month: Prxmpt.PropsOf<typeof month>;
      na: Prxmpt.PropsOf<typeof na>;
      nor: Prxmpt.PropsOf<typeof nor>;
      num: Prxmpt.PropsOf<typeof num>;
      p: Prxmpt.PropsOf<typeof p>;
      parens: Prxmpt.PropsOf<typeof parens>;
      pre: Prxmpt.PropsOf<typeof pre>;
      priority: Prxmpt.PropsOf<typeof priority>;
      q: Prxmpt.PropsOf<typeof q>;
      s: Prxmpt.PropsOf<typeof s>;
      second: Prxmpt.PropsOf<typeof second>;
      sectioned: Prxmpt.PropsOf<typeof sectioned>;
      space: Prxmpt.PropsOf<typeof space>;
      spaced: Prxmpt.PropsOf<typeof spaced>;
      span: Prxmpt.PropsOf<typeof span>;
      sq: Prxmpt.PropsOf<typeof sq>;
      square: Prxmpt.PropsOf<typeof square>;
      state: Prxmpt.PropsOf<typeof state>;
      tab: Prxmpt.PropsOf<typeof tab>;
      tag: Prxmpt.PropsOf<typeof tag>;
      tbq: Prxmpt.PropsOf<typeof tbq>;
      tdq: Prxmpt.PropsOf<typeof tdq>;
      text: Prxmpt.PropsOf<typeof text>;
      time: Prxmpt.PropsOf<typeof time>;
      tq: Prxmpt.PropsOf<typeof tq>;
      trim: Prxmpt.PropsOf<typeof trim>;
      tsq: Prxmpt.PropsOf<typeof tsq>;
      ul: Prxmpt.PropsOf<typeof ul>;
      union: Prxmpt.PropsOf<typeof union>;
      yaml: Prxmpt.PropsOf<typeof yaml>;
      year: Prxmpt.PropsOf<typeof year>;
    }
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
export function hasChildren(props: Partial<Prxmpt.ChildProps>) {
  return props.children !== undefined
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
function mergeProps(props: Prxmpt.PropsOf<typeof elements[Prxmpt.ElementName]>, children: Prxmpt.Children[]) {
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
  props: Prxmpt.PropsOf<typeof elements[Prxmpt.ElementName]>,
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
  createElement,
  Fragment,
  render,
  // Splitters
  split,
  paragraphs,
  lines,
  spaces,
  chars,
  commas,
  // Children
  isChildren,
  hasChildren
};

export default Prxmpt;

export * from "./elements/index.js";
export * from "./splitters.js";
