import * as Prxmpt from "../../index.js";

/**
 * Lowercase all letters.
 */
export const lower: Prxmpt.PC = ({ children }) => {
  return (
    <map each={(node) => Prxmpt.render(node).toLowerCase()}>{children}</map>
  );
};
