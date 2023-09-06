import * as Prxmpt from "../../../index.js";

export interface KVProps extends Prxmpt.InlineProps, Prxmpt.BlockProps {
  key: Prxmpt.Children;
  /**
   * Case to apply to the key.
   * @default undefined
   */
  keyCase?: Prxmpt.Case;
  /**
   * Override the default behavior for wrapping the value.
   * @default undefined
   */
  wrap?: boolean;
  /**
   * If true, do not add a space between the key and value.
   * @default false
   */
  noSpace?: boolean;
};

/**
 * **Key-Value Pair**
 * ```md
 * key: value
 * ```
 */
export const kv: Prxmpt.OC<KVProps> = (props) => {
  const children = props.children ? Prxmpt.render(props.children) : "";
  const wrap = props.wrap ?? children.includes("\n");
  const spacer = children && !props.noSpace
    ? wrap ? "\n" : " "
    : "";
  return (
    <span hide={props.hide} block={(wrap && !props.inline) || props.block}>
      <casing case={props.keyCase}>{props.key}</casing>:{spacer}{props.children}
    </span>
  );
};
