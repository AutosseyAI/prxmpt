import * as Prxmpt from "../../index.js";

export const code: Prxmpt.PC<Prxmpt.HTMLProps> = (props) => {
  if(props.html) {
    return <tag name="code" {...props} />;
  } else {
    return <bq {...props} />;
  }
};

type EmphasisChar = "*" | "_";

export interface ItalicProps extends Prxmpt.TextProps, Prxmpt.HTMLProps {
  /**
   * @default "_"
   */
  char?: EmphasisChar;
}

export const i: Prxmpt.PC<ItalicProps> = (props) => {
  if(props.html) {
    return <tag {...props} name="i" />;
  } else {
    const emphasis = props.char ?? "_";
    return <frame with={emphasis} {...props} />;
  }
};

export interface BoldProps extends Prxmpt.HTMLProps {
  /**
   * @default "*"
   */
  char?: EmphasisChar;
}

export const b: Prxmpt.PC<BoldProps> = (props) => {
  if(props.html) {
    return <tag {...props} name="b" />;
  } else {
    const emphasis = (
      <text repeat={2}>{props.char ?? "*"}</text>
    );
    return <frame with={emphasis} {...props} />;
  }
};

export interface StrikethroughProps extends Prxmpt.HTMLProps {}

export const s: Prxmpt.PC<StrikethroughProps> = (props) => {
  if(props.html) {
    return <tag name="s" {...props} />;
  } else {
    const emphasis = "~~";
    return <frame with={emphasis} {...props} />;
  }
};
