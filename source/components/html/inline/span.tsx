import * as Prxmpt from "../../../index.js";

export interface SpanProps extends Prxmpt.InlineProps, Prxmpt.HTMLProps {}

export const span: Prxmpt.PC<SpanProps> = (props) => {
  if(props.html) {
    return (
      <tag name="span" hide={props.hide}>{props.children}</tag>
    );
  } else {
    return props.hide
      ? undefined
      : (
        <Prxmpt.Fragment>
          {props.children}
          <br hide={!props.block} />
        </Prxmpt.Fragment>
      );
    }
};
