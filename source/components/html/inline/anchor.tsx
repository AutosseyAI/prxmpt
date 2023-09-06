import * as Prxmpt from "../../../index.js";

export interface AnchorProps extends Prxmpt.InlineProps, Prxmpt.HTMLProps {
  href: string;
  title?: string;
};

export const a: Prxmpt.PC<AnchorProps> = (props) => {
  if(props.html) {
    return (
      <tag
        name="a"
        attributes={{ title: props.title, ...props.attributes }}
        {...props} />
    );
  } else {
    return (
      <span hide={props.hide} block={props.block}>
        <square>{props.children}</square>
        <parens>
          {props.href}
          <span hide={!props.title}><space /><dq>{props.title}</dq></span>
        </parens>
      </span>
    );
  }
};
