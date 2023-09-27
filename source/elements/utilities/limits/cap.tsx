import * as Prxmpt from "../../../index.js";
import type { SplitterType } from "../../../splitters.js";
import { splitters } from "../../../splitters.js";

export type Splitter = (string: string) => string[];

export interface CapProps extends Omit<Prxmpt.TextProps, "indent"> {
  /**
   * The maximum "units" to include.
   * @default Infinity
   */
  max?: number;
  /**
   * A function that splits a string into "units".
   * @default "chars"
   */
  splitter?: SplitterType | Splitter;
  /**
   * A string to append to the end if the maximum is reached.
   * This string is included in the maximum count.
   * If `true`, "..." is used.
   * @default undefined
   */
  ellipsis?: string | true;
}

/**
 * Render a string with a maximum number of "units" as defined by a split function.
 */
export const cap: Prxmpt.PC<CapProps> = (props) => {
  if(props.hide) {
    return undefined;
  }
  // Render children
  const rendered = Prxmpt.render(
    <text
      filter={props.filter}
      map={props.map}
      reverse={props.reverse}
      join={props.join}
      repeat={props.repeat}
      trim={props.trim}
      casing={props.casing}>
      {props.children}
    </text>
  );
  // Create Splitter
  const splitter = props.splitter ?? "chars";
  const split = typeof splitter === "string"
    ? (string: string) => splitters[splitter](string, { retainSeparator: true })
    : splitter;
  const splits = split(rendered);
  // Calculate Capacity
  const prefix = Prxmpt.render(props.prefix ?? "");
  const prefixSplits = prefix.length === 0 ? [] : split(prefix);
  const fullSuffix = `${Prxmpt.render(props.suffix ?? "")}${props.block ? "\n" : ""}`;
  const suffixSplits = fullSuffix.length === 0 ? [] : split(fullSuffix);
  const ellipsis = props.ellipsis === true ? "..." : props.ellipsis;
  const ellipsisSplits = ellipsis ? split(ellipsis) : [];
  const reserved = prefixSplits.length + suffixSplits.length + ellipsisSplits.length;
  const capacity = (props.max ?? Infinity) - reserved;
  // Render Final Text
  return (
    <text
      prefix={props.prefix}
      suffix={props.suffix}
      trim={props.trim}
      block={props.block}>
      {splits.slice(0, capacity)}
      {splits.length > capacity ? ellipsis : undefined}
    </text>
  );
};
