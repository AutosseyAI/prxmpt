import * as Prxmpt from "../../index.js";
import { HTMLProps } from "./brackets.js";
import { SpanProps } from "./text.js";

// Lines

export interface LinesProps extends SpanProps {
  height?: number;
}

export const lines: Prxmpt.PC<LinesProps> = (props) => {
  return (
    <join with={<br count={props.height} />} hide={props.hide}>
      {props.children}
    </join>
  );
};

export interface BlockquoteProps extends SpanProps, HTMLProps {}

export const blockquote: Prxmpt.PC<BlockquoteProps> = (props) => {
  if(props.html) {
    return <tag name="blockquote" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    return (
      <lines hide={props.hide}>
        <map to={(line) => `> ${line}`}>
          <split on={`\n`}>{props.children}</split>
        </map>
      </lines>
    );
  }
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

export interface PreProps extends SpanProps, HTMLProps {
  lang?: string;
  title?: string;
  /**
   * @default false
   */
  noTrailingNewline?: boolean;
};

export const pre: Prxmpt.PC<PreProps> = (props) => {
  if(props.html) {
    return <tag name="pre" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    const body = (
      <btq noStartingNewline trailingNewline={!props.noTrailingNewline} hide={props.hide}>
        {props.lang}<br />
        {props.children}
      </btq>
    );
    return props.title ? <colon title={props.title}>{body}</colon> : body;
  }
};

export interface DivProps extends SpanProps, HTMLProps {
  title?: string;
  /**
   * @default false
   */
  noTrailingNewline?: boolean;
};

export const div: Prxmpt.PC<DivProps> = (props) => {
  if(props.html) {
    return <tag name="div" hide={props.hide} attributes={props.attributes}>{props.children}</tag>
  } else {
    const body = (
      <bracket
        hide={props.hide}
        prefix={`---\n`}
        suffix={`\n---${props.noTrailingNewline ? "" : "\n"}`}>
        {props.children}
      </bracket>
    );
    return props.title ? <colon title={props.title}>{body}</colon> : body;
  }
};

export interface SectionsProps extends SpanProps {
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
