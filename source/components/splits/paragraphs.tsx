import * as Prxmpt from "../../index.js";

export const paragraphs: Prxmpt.PC = (props) => {
  return <split on={`\n\n`} {...props} />;
};
