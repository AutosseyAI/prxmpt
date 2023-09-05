import * as Prxmpt from "../../../index.js";

type EmphasisChar = "*" | "_";

export interface ItalicProps extends Prxmpt.InlineProps, Prxmpt.HTMLProps {
  /**
   * @default "_"
   */
  char?: EmphasisChar;
}

export const i: Prxmpt.PC<ItalicProps> = (props) => {
  if(props.html) {
    return <tag name="i" {...props} />
  } else {
    return <wrap with={props.char ?? "_"} {...props} />
  }
};

export interface BoldProps extends Prxmpt.InlineProps, Prxmpt.HTMLProps {
  /**
   * @default "*"
   */
  char?: EmphasisChar;
}

export const b: Prxmpt.PC<BoldProps> = (props) => {
  if(props.html) {
    return <tag name="b" {...props} />
  } else {
    const emphasis = (
      <repeat count={2}>{props.char ?? "*"}</repeat>
    );
    return (
      <wrap with={emphasis} {...props} />
    );
  }
};

export interface StrikethroughProps extends Prxmpt.InlineProps, Prxmpt.HTMLProps {}

export const s: Prxmpt.PC<StrikethroughProps> = (props) => {
  if(props.html) {
    return <tag name="s" {...props} />
  } else {
    return <wrap with="~~" {...props} />
  };
};
