import * as Prxmpt from "../../index.js";

/**
 * Uppercase all letters.
 */
export const upper: Prxmpt.PC = ({ children }) => {
  return (
    <map each={(node) => Prxmpt.render(node).toUpperCase()}>{children}</map>
  );
};
