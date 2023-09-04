import * as Prxmpt from "../../index.js";

export const trim: Prxmpt.PC = (props) => {
  const string = Prxmpt.Fragment(props);
  return string.trim();
};
