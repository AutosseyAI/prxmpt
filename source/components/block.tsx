import * as Prxmpt from "../";

type PreProps = {
  lang?: string;
  title?: string;
};

export const pre: Prxmpt.PC<PreProps> = (props) => {
  return (
    <bracket
      prefix={`${props.title ? `${props.title}:\n` : ""}\`\`\`${props.lang ?? ""}\n`}
      suffix={"\n```\n"}>
      {props.children}
    </bracket>
  );
};

type DivProps = {
  title?: string;
};

export const div: Prxmpt.PC<DivProps> = (props) => {
  return (
    <bracket
      prefix={`${props.title ? `${props.title}:\n` : ""}"""\n`}
      suffix={`\n"""\n`}>
      {props.children}
    </bracket>
  );
};
