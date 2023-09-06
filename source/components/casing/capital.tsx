import * as Prxmpt from "../../index.js";

/**
 * Capitalize the first letter.
 */
export const capital: Prxmpt.PC = ({ children }) => {
  return (
    <map
      each={(node) => {
        const str = Prxmpt.render(node);
        return str.charAt(0).toUpperCase() + str.slice(1);
      }}>
      {children}
    </map>
  );
}
