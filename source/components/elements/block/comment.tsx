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
  return (
    <bracket
      hide={props.hide}
      prefix={prefix}
      suffix={suffix}
      block={!props.inline}>
      {props.children}
    </bracket>
  );
};
