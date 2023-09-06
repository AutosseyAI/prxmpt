import * as Prxmpt from "../../../index.js";

export interface SectionedProps extends Prxmpt.BlockProps {
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
    <join with={<span><br />{divider}<br /></span>} hide={props.hide}>
      {props.children}
    </join>
  );
  if(props.frame) {
    return (
      <frame
        hide={props.hide}
        with={divider}
        block={!props.inline}>
        <br />{body}<br />
      </frame>
    );
  } else {
    return (
      <span hide={props.hide} block={!props.inline}>{body}</span>
    );
  }
};
