import * as Prxmpt from "../../../index.js";

export interface SectionsProps extends Prxmpt.BlockProps {
  /**
   * @default "---"
   */
  divider?: string;
  /**
   * @default false
   */
  surround?: boolean;
}

export const sections: Prxmpt.PC<SectionsProps> = (props) => {
  const divider = props.divider ?? "---";
  const body = (
    <join with={<span><br />{divider}<br /></span>} hide={props.hide}>
      {props.children}
    </join>
  );
  if(props.surround) {
    return (
      <bracket
        hide={props.hide}
        prefix={<span>{divider}<br /></span>}
        suffix={<span><br />{divider}</span>}>
        {body}
      </bracket>
    );
  } else {
    return body;
  }
};
