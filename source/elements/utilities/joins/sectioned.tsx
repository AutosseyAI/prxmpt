import * as Prxmpt from "../../../index.js";

export interface SectionedProps extends Prxmpt.TextProps {
  /**
   * @default "---"
   */
  divider?: string;
  /**
   * @default false
   */
  frame?: boolean;
}

export const sectioned: Prxmpt.PC<SectionedProps> = (props) => {
  const divider = props.divider ?? "---";
  const body = (
    <text join={<text><br />{divider}<br /></text>}>
      {props.children}
    </text>
  );
  if(props.frame) {
    return (
      <frame
        {...props}
        with={divider}>
        <br />{body}<br />
      </frame>
    );
  } else {
    return (
      <text {...props}>
        {body}
      </text>
    );
  }
};
