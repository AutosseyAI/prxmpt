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
    <lines hide={props.hide} inline={props.inline}>
      <map to={(line) => (
        <span>
          <tab
            hide={props.unless}
            width={props.width}
            noSpace={props.noSpace}
            count={props.count} />
          {line}
        </span>
      )}>
        <split on={`\n`} ignoreTrailing>{props.children}</split>
      </map>
    </lines>
  );
};
