import * as Prxmpt from "../../index.js";

export interface AnchorProps {
  href: string;
  title?: string;
  /**
   * @default false
   */
  html?: boolean;
};

export const a: Prxmpt.PC<AnchorProps> = (props) => {
  if(props.html) {
    return <xml name="a" attributes={{ title: props.title }}>{props.children}</xml>;
  } else {
    return (
      <span>
        <square>{props.children}</square>
        <parens>
          {props.href}
          {props.title ? <span><space /><dq>{props.title}</dq></span> : ""}
        </parens>
      </span>
    );
  }
};
