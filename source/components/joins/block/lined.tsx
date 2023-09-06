import * as Prxmpt from "../../../index.js";

export interface LinedProps extends Prxmpt.BlockProps {
  height?: number;
}

export const lined: Prxmpt.PC<LinedProps> = (props) => {
  return (
    <join hide={props.hide} block={!props.inline} with={<br count={props.height} />}>
      {props.children}
    </join>
  );
};
