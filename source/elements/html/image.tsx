import * as Prxmpt from "../../index.js";

export interface ImageProps extends Prxmpt.HTMLProps {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * A title for the image.
   */
  title?: string;
};

export const img: Prxmpt.PC<ImageProps> = (props) => {
  if(props.html) {
    const children = Prxmpt.render(props.children);
    return (
      <tag
        name="img"
        attributes={{
          src: props.src,
          alt: children,
          title: props.title,
          ...props.attributes
        }} />
    );
  } else {
    return (
      <text {...props}>
        !<square>{props.children}</square>
        <parens>
          {props.src}
          <span hide={!props.title}><space /><dq>{props.title}</dq></span>
        </parens>
      </text>
    );
  }
};
