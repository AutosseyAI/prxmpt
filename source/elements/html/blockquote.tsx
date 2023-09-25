import * as Prxmpt from "../../index.js";

export interface BlockquoteProps extends Prxmpt.HTMLProps {}

export const blockquote: Prxmpt.PC<BlockquoteProps> = (props) => {
  if(props.html) {
    return <tag name="blockquote" {...props} />;
  } else {
    return (
      <text {...props}>
        <lined map={(line) => `> ${Prxmpt.render(line)}`}>
          {Prxmpt.lines(props.children)}
        </lined>
      </text>
    );
  }
};
