import * as Prxmpt from "../index";

export const upper: Prxmpt.PC = ({ children }) => {
  return (
    <map to={(node) => Prxmpt.render(node).toUpperCase()}>{children}</map>
  );
};

export const lower: Prxmpt.PC = ({ children }) => {
  return (
    <map to={(node) => Prxmpt.render(node).toLowerCase()}>{children}</map>
  );
};

export const capital: Prxmpt.PC = ({ children }) => {
  const capitalize = (node: Prxmpt.Node) => {
    const str = Prxmpt.render(node);
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <map to={capitalize}>{children}</map>
  );
}
