import * as Prxmpt from "../../index.js";

export interface HeadingProps {
  /**
   * @default false
   */
  html?: boolean;
};

export const h1: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h1">{props.children}</xml>
    : `# ${<>{props.children}</>}`;
};

export const h2: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h2">{props.children}</xml>
    : `## ${<>{props.children}</>}`;
};

export const h3: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h3">{props.children}</xml>
    : `### ${<>{props.children}</>}`;
};

export const h4: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h4">{props.children}</xml>
    : `#### ${<>{props.children}</>}`;
};

export const h5: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h5">{props.children}</xml>
    : `##### ${<>{props.children}</>}`;
};

export const h6: Prxmpt.PC<HeadingProps> = (props) => {
  return props.html
    ? <xml name="h6">{props.children}</xml>
    : `###### ${<>{props.children}</>}`;
};
