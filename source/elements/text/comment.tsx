import * as Prxmpt from "../../index.js";

const commentTypes = {
  slash: ["// ", ""],
  dash: ["-- ", ""],
  hash: ["# ", ""],
  html: ["<!--", "-->"]
} as const;

export type CommentType = keyof typeof commentTypes;

export interface CommentProps extends Prxmpt.TextProps {
  /**
   * @default "slash"
   */
  type?: CommentType
}

export const comment: Prxmpt.PC<CommentProps> = (props) => {
  const [prefix, suffix] = commentTypes[props.type ?? "slash"];
  if(props.type === "html") {
    const text = Prxmpt.render(props.children);
    const wrap = text.includes("\n");
    const spacer = wrap ? "\n" : " ";
    return (
      <text {...props}>
        <text
          prefix={prefix}
          suffix={suffix}>
          {spacer}
          {props.children}
          {spacer}
        </text>
      </text>
    );
  } else {
    return (
      <text {...props}>
        <lined
          map={(line) => (
            <text
              prefix={prefix}
              suffix={suffix}>
              {line}
            </text>
          )}>
          {Prxmpt.lines(props.children)}
        </lined>
      </text>
    );
  }
};
