import * as Prxmpt from "../../../index.js";

export interface PreProps extends Prxmpt.HTMLProps, Prxmpt.BlockProps {
  lang?: string;
  title?: string;
};

export const pre: Prxmpt.PC<PreProps> = (props) => {
  if(props.html) {
    return <tag name="pre" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    const body = (
      <btq noStartingNewline inline={props.inline} hide={props.hide}>
        {props.lang}<br />
        {props.children}
      </btq>
    );
    return props.title
      ? <kv key={props.title} hide={props.hide} inline={props.inline}>{body}</kv>
      : body;
  }
};
