import * as Prxmpt from "../../index.js";

export const upper: Prxmpt.PC = ({ children }) => {
  return (
    <map to={(node) => Prxmpt.render(node).toUpperCase()}>{children}</map>
  );
};
