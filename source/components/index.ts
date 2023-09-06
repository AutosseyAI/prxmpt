
export interface HideProps {
  /**
   * @default false
   */
  hide?: boolean;
}

export interface InlineProps extends HideProps {
  /**
   * @default false
   */
  block?: boolean;
}

export interface BlockProps extends HideProps {
  /**
   * @default false
   */
  inline?: boolean;
}

// Elements
export * from "./text/index.js";
export * from "./html/index.js";
// Transformations
export * from "./casing/index.js";
export * from "./grammatical/index.js";
export * from "./serialization/index.js";
// Operations
export * from "./joins/index.js";
export * from "./splits/index.js";
export * from "./utilities/index.js";

