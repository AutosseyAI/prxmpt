import * as Prxmpt from "../../index.js";

export const state: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return <text {...props}>{props.children}.</text>;
};

export const ask: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return <text {...props}>{props.children}?</text>;
};

export const exclaim: Prxmpt.PC<Prxmpt.TextProps> = (props) => {
  return <text {...props}>{props.children}!</text>;
};
