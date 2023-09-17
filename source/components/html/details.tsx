import * as Prxmpt from "../../index.js";

export interface DetailsProps extends Prxmpt.HTMLProps {
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
        noIndent={props.noIndent}
        attributes={{ open: props.open, ...props.attributes }}>
        <tag
          name="summary"
          hide={props.summary === undefined}
          indent={!props.noIndent || !props.indentSummary}>
          {props.summary}
        </tag>
        {props.children}
      </tag>
    );
  } else {
    return (
      <text {...props}>
        <lined>
          <span hide={props.summary === undefined}>{props.summary}</span>
          <span hide={props.open === false}>{props.children}</span>
        </lined>
      </text>
    );
  }
};
