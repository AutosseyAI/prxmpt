import * as Prxmpt from "../../../index.js";

export interface HideProps {
  /**
   * @default false
   */
  hide?: boolean;
}

export interface InlineProps extends HideProps {
  /**
   * @default false
   */
  block?: boolean;
}

export const span: Prxmpt.PC<InlineProps> = (props) => {
  return props.hide
    ? undefined
    : (
      <Prxmpt.Fragment>
        {props.children}
        <br hide={!props.block} />
      </Prxmpt.Fragment>
    );
};
