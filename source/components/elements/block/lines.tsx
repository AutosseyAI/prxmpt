import * as Prxmpt from "../../../index.js";

export interface LinesProps extends Prxmpt.BlockProps {
  height?: number;
}

export const lines: Prxmpt.PC<LinesProps> = (props) => {
  return (
    <join hide={props.hide} block={!props.inline} with={<br count={props.height} />}>
      {props.children}
    </join>
  );
};
