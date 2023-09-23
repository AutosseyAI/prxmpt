import * as Prxmpt from "../../index.js";

export interface ImageProps extends Prxmpt.HTMLProps {
  href: string;
  title?: string;
};

export const img: Prxmpt.PC<ImageProps> = (props) => {
  if(props.html) {
    return (
      <tag
        name="img"
        attributes={{ title: props.title, ...props.attributes }}
        {...props} />
    );
  } else {
    return (
      <text {...props}>
        !<square>{props.children}</square>
        <parens>
          {props.href}
          <span hide={!props.title}><space /><dq>{props.title}</dq></span>
        </parens>
      </text>
    );
  }
};
