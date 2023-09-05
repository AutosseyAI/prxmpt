import * as Prxmpt from "../../../index.js";

export interface BlockProps extends Prxmpt.HideProps {
  /**
   * @default false
   */
  inline?: boolean;
}

export * from "./blockquote.js";
export * from "./comment.js";
export * from "./details.js";
export * from "./div.js";
export * from "./headings.js";
export * from "./indent.js";
export * from "./lines.js";
export * from "./lists.js";
export * from "./pre.js";
export * from "./paragraph.js";
export * from "./sections.js";
export * from "./tag.js";
export * from "./triplequotes.js";
