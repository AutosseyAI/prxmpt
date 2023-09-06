import * as Prxmpt from "../../../index.js";

export interface DivProps extends Prxmpt.HTMLProps, Prxmpt.BlockProps {
  title?: string;
};

export const div: Prxmpt.PC<DivProps> = (props) => {
  if(props.html) {
    return <tag name="div" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    const body = (
      <bracket
        hide={props.hide}
        prefix={`---\n`}
        suffix={`\n---${props.inline ? "" : "\n"}`}>
        {props.children}
      </bracket>
    );
    return props.title ? <kv key={props.title}>{body}</kv> : body;
  }
};
