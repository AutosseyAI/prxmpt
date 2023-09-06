import * as Prxmpt from "../../../index.js";

export interface QuoteProps extends Prxmpt.QuoteEscapeProps, Prxmpt.BlockProps {
  /**
   * @default "double"
   */
  type?: Prxmpt.QuoteType;
}

/**
 * If the children contain a newline, render as a triple quote.
 * Otherwise, render as a single quote.
 */
export const q: Prxmpt.PC<QuoteProps> = (props) => {
  const text = Prxmpt.render(props.children);
  if(text.includes("\n")) {
    return <tq {...props}>{text}</tq>;
  } else if(props.type === "single") {
    return <sq {...props} />;
  } else if(props.type === "backtick") {
    return <code {...props} />;
  } else {
    return <dq {...props} />;
  }
}
