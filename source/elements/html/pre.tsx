import * as Prxmpt from "../../index.js";

export interface PreProps extends Prxmpt.HTMLProps {
  lang?: string;
  title?: string;
};

export const pre: Prxmpt.PC<PreProps> = (props) => {
  if(props.html) {
    return <tag name="pre" {...props} />
  } else {
    const body = (
      <tbq noStartingNewline hide={props.hide}>
        {props.lang}<br />
        {props.children}
      </tbq>
    );
    return (
      <text {...props}>
        {
          props.title
            ? <kv key={props.title} hide={props.hide}>{body}</kv>
            : body
        }
      </text>
    );
  }
};
