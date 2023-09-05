import * as Prxmpt from "../../index.js";
import { SpanProps } from "./text.js";

const commentTypes = {
  "slash": ["// ", ""],
  "dash": ["-- ", ""],
  "hash": ["# ", ""],
  "html": ["<!--", "-->"],
} as const;

export type CommentType = keyof typeof commentTypes;

export interface CommentProps extends SpanProps {
  /**
   * @default "slash"
   */
  type?: CommentType
};

export const comment: Prxmpt.PC<CommentProps> = (props) => {
  const [prefix, suffix] = commentTypes[props.type ?? "slash"];
  return <bracket prefix={prefix} suffix={suffix}>{props.children}</bracket>;
};
