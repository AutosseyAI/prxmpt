import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";

export type TrimSide = "start" | "end";

function applyTrim(string: string, trim?: boolean | TrimSide) {
  if(trim === true) {
    return string.trim();
  }
  if(trim === "start") {
    return string.trimStart();
  }
  if(trim === "end") {
    return string.trimEnd();
  }
  return string;
}

export type Casing = "upper" | "lower" | "capital" | "title";

function applyCasing(string: string, casing?: Casing) {
  switch(casing) {
    case "upper":
      return string.toUpperCase();
    case "lower":
      return string.toLowerCase();
    case "capital":
      return string.charAt(0).toUpperCase() + string.slice(1);
    case "title":
      return string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    default:
      return string;
  }
}

type Indent = boolean | number | "\t";

function applyIndent(string: string, indent?: Indent) {
  if(!indent) {
    return string;
  }
  const whitespace = typeof indent === "string"
    ? indent
    : " ".repeat(indent === true ? 2 : indent);
  const lines = string.split("\n").map((line) => {
    if(line.trim().length > 0) {
      return `${whitespace}${line}`;
    } else {
      return line;
    }
  });
  return lines.join("\n");
}

export interface HideProps {
  /**
   * Prevent the Element from being rendered.
   * @default false
   */
  hide?: boolean;
}

export interface TextProps extends HideProps {
  /**
   * A function to filter children.
   * @default (node) => true
   */
  filter?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => boolean;
  /**
   * A function that maps each child to a new Element.
   * @default (node) => Prxmpt.render(node)
   */
  map?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => Prxmpt.JSX.Element;
  /**
   * Reverse the order of the children.
   */
  reverse?: boolean;
  /**
   * An Element to insert between each child.
   * @default ""
   */
  join?: Prxmpt.Children;
  /**
   * @default 1
   */
  repeat?: number;
  /**
   * `true`: Trim whitespace from the beginning and end of the Element.
   * 
   * `"start"`: Trim whitespace from the beginning of the Element.
   * 
   * `"end"`: Trim whitespace from the end of the Element.
   * 
   * @default false
   */
  trim?: boolean | TrimSide;
  /**
   * Convert the Element to a given casing.
   * @default undefined
   */
  casing?: Casing;
  /**
   * An Element to prepend to the element.
   * @default ""
   */
  prefix?: Prxmpt.Children;
  /**
   * An Element to append to the element.
   * @default ""
   */
  suffix?: Prxmpt.Children;
  /**
   * Apply indentation to each line of the Element.
   * 
   * If `true`, indentation is applied using 2 spaces.
   * 
   * If a number is provided, that number of spaces is used.
   * 
   * If `"\t"` is provided, a single tab character is used.
   * 
   * @default false
   */
  indent?: boolean | number | "\t";
  /**
   * Append a newline to the end of the Element.
   * @default false
   */
  block?: boolean;
}

export const text: Prxmpt.PC<TextProps> = (props) => {
  const filter = props.filter || ((node) => true);
  const map = props.map || ((node) => Prxmpt.render(node));
  const array = asArray(props.children)
    .filter((child, index, arr) => child !== undefined && filter(child, index, arr))
    .map((child, index, arr) => map(child, index, arr));
  if(props.reverse) {
    array.reverse();
  }
  const content = array
    .join(Prxmpt.render(props.join ?? ""))
    .repeat(props.repeat ?? 1);
  const trimmed = applyTrim(content, props.trim);
  const cased = applyCasing(trimmed, props.casing);
  const bracketed = `${props.prefix ?? ""}${cased}${props.suffix ?? ""}`;
  const indented = applyIndent(bracketed, props.indent);
  return props.hide
    ? undefined
    : (
      <Prxmpt.Fragment>
        {indented}
        {props.block ? "\n" : undefined}
      </Prxmpt.Fragment>
    );
};
