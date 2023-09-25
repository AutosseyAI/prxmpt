import type { TextProps } from "../../index.js";
import Prxmpt from "../../index.js";

export const upper: Prxmpt.PC<TextProps> = (props) => {
  return (
    <text casing="upper" {...props} />
  );
};

export const lower: Prxmpt.PC<TextProps> = (props) => {
  return (
    <text casing="lower" {...props} />
  );
};

export const title: Prxmpt.PC<TextProps> = (props) => {
  return (
    <text casing="title" {...props} />
  );
};

export const capital: Prxmpt.PC<TextProps> = (props) => {
  return (
    <text casing="capital" {...props} />
  );
};

