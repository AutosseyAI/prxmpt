import * as Prxmpt from "../../index.js";

export interface AnchorProps extends Prxmpt.HTMLProps {
  /**
   * The URL of the link.
   */
  href: string;
  /**
   * A title for the link.
   */
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
