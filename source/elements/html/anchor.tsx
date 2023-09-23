import * as Prxmpt from "../../index.js";

export interface AnchorProps extends Prxmpt.HTMLProps {
  href: string;
  title?: string;
};

export const a: Prxmpt.PC<AnchorProps> = (props) => {
  if(props.html) {
    return (
      <text {...props}>
        <tag
          name="a"
          attributes={{ href: props.href, title: props.title, ...props.attributes }}>
          {props.children}
        </tag>
      </text>
    );
  } else {
    return (
      <text {...props}>
        <square>{props.children}</square>
        <parens>
          {props.href}
          <span hide={!props.title}><space /><dq>{props.title}</dq></span>
        </parens>
      </text>
    );
  }
};
