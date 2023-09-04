import * as Prxmpt from "../../index.js";

type EmphasisChar = "*" | "_";

export interface BoldProps {
  /**
   * @default "*"
   */
  char?: EmphasisChar;
}

export const b: Prxmpt.PC<BoldProps> = (props) => {
  return <wrap with={(props.char ?? "*").repeat(2)}>{props.children}</wrap>;
};

export interface ItalicProps {
  /**
   * @default "_"
   */
  char?: EmphasisChar;
}

export const i: Prxmpt.PC<ItalicProps> = (props) => {
  return <wrap with={props.char ?? "_"}>{props.children}</wrap>;
};

export const s: Prxmpt.PC = (props) => {
  return <wrap with="~">{props.children}</wrap>;
};
