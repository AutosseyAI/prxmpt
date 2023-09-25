import * as Prxmpt from "../../index.js";

export interface KVProps extends Prxmpt.TextProps {
  /**
   * A key to render.
   */
  key: Prxmpt.Children;
  /**
   * Case to apply to the key.
   * @default undefined
   */
  keyCase?: Prxmpt.Casing;
  /**
   * Override the default behavior for wrapping the value.
   * @default undefined
   */
  wrap?: boolean;
  /**
   * If true, do not add a space between the key and value.
   * Only applies when not wrapping.
   * @default false
   */
  noSpace?: boolean;
}

/**
 * **Key-Value Pair**
 * ```md
 * key: value
 * ```
 */
export const kv: Prxmpt.OC<KVProps> = (props) => {
  const children = Prxmpt.render(props.children);
  const wrap = props.wrap ?? children.includes("\n");
  const spacer = wrap
    ? "\n"
    : props.noSpace ? "" : " ";
  return (
    <text {...props}>
      <text casing={props.keyCase}>{props.key}</text>:{spacer}{props.children}
    </text>
  );
};
