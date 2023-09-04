import * as Prxmpt from "../../index.js";

export const lower: Prxmpt.PC = ({ children }) => {
  return (
    <map to={(node) => Prxmpt.render(node).toLowerCase()}>{children}</map>
  );
};
