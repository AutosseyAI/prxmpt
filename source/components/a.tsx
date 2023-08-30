import * as Prxmpt from "../index";

type AnchorProps = {
  href: string;
  title?: string;
};

export const a: Prxmpt.PC<AnchorProps> = (props) => {
  return (
    <span>
      <square>{props.children}</square>
      <parens>{props.href}{props.title ? <><space /><doublequote>{props.title}</doublequote></> : null}</parens>
    </span>
  );
};
