import * as Prxmpt from "../../index.js";

export const capital: Prxmpt.PC = ({ children }) => {
  const capitalize = (node: Prxmpt.Children) => {
    const str = Prxmpt.render(node);
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <map to={capitalize}>{children}</map>
  );
}
