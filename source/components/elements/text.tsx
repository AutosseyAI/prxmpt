import * as Prxmpt from "../../index.js";

export interface SpanProps {
  /**
   * @default false
   */
  hide?: boolean;
}

export const span: Prxmpt.PC<SpanProps> = (props) => {
  return props.hide
    ? <empty />
    : <Prxmpt.Fragment>{props.children}</Prxmpt.Fragment>;
};

export const p: Prxmpt.PC<SpanProps> = (props) => {
  return <span hide={props.hide}>{props.children}<br /></span>;
};
