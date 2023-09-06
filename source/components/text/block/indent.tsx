import * as Prxmpt from "../../../index.js";

export interface IndentProps extends Omit<Prxmpt.TabProps, "block">, Prxmpt.BlockProps {
  /**
   * If true, the tab will be ignored.
   * @default false
   */
  unless?: boolean;
}

export const indent: Prxmpt.PC<IndentProps> = (props) => {
  return (
    <lined hide={props.hide} inline={props.inline}>
      <map each={(line) => {
        const text = Prxmpt.render(line);
        return (
          <span>
            <tab
              hide={props.unless || !text}
              width={props.width}
              literal={props.literal}
              count={props.count} />
            {text}
          </span>
        );
      }}>
        <split on={`\n`}>{props.children}</split>
      </map>
    </lined>
  );
};
