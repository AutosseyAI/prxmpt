import * as Prxmpt from "../../index.js";

export type CommentType = "slash" | "dash" | "hash";

export interface CommentProps {
  /**
   * @default "slash"
   */
  type?: CommentType
};

const commentTypes: Record<CommentType, string> = {
  "slash": "//",
  "dash": "--",
  "hash": "#"
};

export const comment: Prxmpt.PC<CommentProps> = (props) => {
  const prefix = commentTypes[props.type ?? "slash"];
  return <span>{prefix} {props.children}</span>;
};
