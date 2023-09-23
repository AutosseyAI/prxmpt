import * as Prxmpt from "../../index.js";

export interface SpanProps extends Prxmpt.HTMLProps {}

export const span: Prxmpt.PC<SpanProps> = (props) => {
  if(props.html) {
    return (
      <tag name="span" {...props} />
    );
  } else {
    return (
      <text {...props} />
    );
  }
};
