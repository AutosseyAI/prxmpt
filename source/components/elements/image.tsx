import * as Prxmpt from "../../index.js";

export interface ImageProps {
  href: string;
};

export const img: Prxmpt.PC<ImageProps> = (props) => {
  return (
    <span>
      !<square>{props.children}</square>
      <parens>{props.href}</parens>
    </span>
  );
};
