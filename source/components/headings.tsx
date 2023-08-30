import Prxmpt, { PC } from "../";

export const h1: PC = (props) => {
  return `# ${<>{props.children}</>}`;
};

export const h2: PC = (props) => {
  return `## ${<>{props.children}</>}`;
};

export const h3: PC = (props) => {
  return `### ${<>{props.children}</>}`;
};

export const h4: PC = (props) => {
  return `#### ${<>{props.children}</>}`;
};

export const h5: PC = (props) => {
  return `##### ${<>{props.children}</>}`;
};

export const h6: PC = (props) => {
  return `###### ${<>{props.children}</>}`;
};
