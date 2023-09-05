import * as Prxmpt from "../../index.js";

// Lines

export interface LinesProps {
  height?: number;
}

export const lines: Prxmpt.PC<LinesProps> = (props) => {
  return (
    <join with={<br count={props.height} />}>
      {props.children}
    </join>
  );
};

export const blockquote: Prxmpt.PC = (props) => {
  return (
    <lines>
      <map to={(line) => `> ${line}`}>
        <split on={`\n`}>{props.children}</split>
      </map>
    </lines>
  );
};

export interface TabProps {
  /**
   * @default 2
   */
  length?: number;
  /**
   * @default true
   */
  useSpaces?: boolean;
}

export const tab: Prxmpt.PC<TabProps> = (props) => {
  const space = props.useSpaces === false ? "\t" : " ".repeat(props.length ?? 2);
  return (
    <lines>
      <map to={(line) => `${space}${line}`}>
        <split on={`\n`} ignoreTrailing>{props.children}</split>
      </map>
    </lines>
  );
};

// Brackets

export interface PreProps {
  lang?: string;
  title?: string;
  /**
   * @default false
   */
  noTrailingNewline?: boolean;
};

export const pre: Prxmpt.PC<PreProps> = (props) => {
  const body = (
    <btq noStartingNewline trailingNewline={!props.noTrailingNewline}>
      {props.lang}<br />
      {props.children}
    </btq>
  );
  return props.title ? <colon title={props.title}>{body}</colon> : body;
};

export interface DivProps {
  title?: string;
  /**
   * @default false
   */
  noTrailingNewline?: boolean;
};

export const div: Prxmpt.PC<DivProps> = (props) => {
  const body = (
    <bracket
      prefix={`---\n`}
      suffix={`\n---${props.noTrailingNewline ? "" : "\n"}`}>
      {props.children}
    </bracket>
  );
  return props.title ? <colon title={props.title}>{body}</colon> : body;
};

export interface SectionsProps {
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
    <join with={<span><br />{divider}<br /></span>}>
      {props.children}
    </join>
  );
  if(props.surround) {
    return (
      <bracket
        prefix={<span>{divider}<br /></span>}
        suffix={<span><br />{divider}</span>}>
        {body}
      </bracket>
    );
  } else {
    return body;
  }
};
