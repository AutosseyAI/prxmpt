import * as Prxmpt from "../../index.js";

export interface DivProps extends Prxmpt.HTMLProps {
  title?: string;
};

export const div: Prxmpt.PC<DivProps> = (props) => {
  if(props.html) {
    return <tag name="div" {...props} />
  } else {
    const body = (
      <text
        prefix={"---\n"}
        suffix={"\n---"}>
        {props.children}
      </text>
    );
    return (
      <text {...props}>
        {
          props.title
            ? <kv key={props.title}>{body}</kv>
            : body
        }
      </text>
    );
  }
};
