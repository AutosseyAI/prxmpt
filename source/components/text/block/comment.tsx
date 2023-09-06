import * as Prxmpt from "../../../index.js";

const commentTypes = {
  "slash": ["// ", ""],
  "dash": ["-- ", ""],
  "hash": ["# ", ""],
  "html": ["<!--", "-->"],
} as const;

export type CommentType = keyof typeof commentTypes;

export interface CommentProps extends Prxmpt.BlockProps {
  /**
   * @default "slash"
   */
  type?: CommentType
};

export const comment: Prxmpt.PC<CommentProps> = (props) => {
  const [prefix, suffix] = commentTypes[props.type ?? "slash"];
  if(props.type === "html") {
    const text = Prxmpt.render(props.children);
    const wrap = text.includes("\n");
    const spacer = wrap ? "\n" : " ";
    return (
      <bracket
        hide={props.hide}
        prefix={prefix}
        suffix={suffix}
        block={!props.inline}>
        {spacer}
        {props.children}
        {spacer}
      </bracket>
    );
  } else {
    return (
      <lined hide={props.hide} inline={props.inline}>
        <map each={(line) => {
          return (
            <bracket
              prefix={prefix}
              suffix={suffix}>
              {line}
            </bracket>
          );
        }}>
          <split on={`\n`}>{props.children}</split>
        </map>
      </lined>
    );
  }
};
