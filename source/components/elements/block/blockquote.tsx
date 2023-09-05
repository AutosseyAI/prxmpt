import * as Prxmpt from "../../../index.js";

export interface BlockquoteProps extends Prxmpt.HTMLProps, Prxmpt.BlockProps {}

export const blockquote: Prxmpt.PC<BlockquoteProps> = (props) => {
  if(props.html) {
    return <tag name="blockquote" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    return (
      <lines hide={props.hide} inline={props.inline}>
        <map to={(line) => `> ${line}`}>
          <split on={`\n`}>{props.children}</split>
        </map>
      </lines>
    );
  }
};
