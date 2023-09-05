import * as Prxmpt from "../../../index.js";

export interface DetailsProps extends Prxmpt.BlockProps, Prxmpt.HTMLProps {
  open?: boolean;
  summary?: string;
  /**
   * Do not indent children when rendering as HTML.
   * @default false
   */
  noIndent?: boolean;
  /**
   * Indent summary, even if `noIndent` is true.
   * @default false
   */
  indentSummary?: boolean;
};

export const details: Prxmpt.PC<DetailsProps> = (props) => {
  if(props.html) {
    return (
      <tag
        name="details"
        hide={props.hide}
        inline={props.inline}
        noIndent={props.noIndent}
        attributes={{ open: props.open, ...props.attributes }}>
        <indent unless={!props.noIndent || !props.indentSummary}>
          <tag name="summary" hide={props.summary === undefined}>{props.summary}</tag>
        </indent>
        {props.children}
      </tag>
    );
  } else {
    return (
      <lines hide={props.hide} inline={props.inline}>
        <span hide={props.summary === undefined}>{props.summary}</span>
        <span hide={props.open === false}>{props.children}</span>
      </lines>
    );
  }
};
