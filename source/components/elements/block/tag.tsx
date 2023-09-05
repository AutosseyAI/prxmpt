import * as Prxmpt from "../../../index.js";

export interface AttributesProps {
  attributes?: Record<string, string | number | boolean | undefined>;
}

export interface TagProps extends Prxmpt.BlockProps, AttributesProps {
  name: string;
  /**
   * @default false
   */
  noIndent?: boolean;
};

export interface HTMLProps extends AttributesProps {
  /**
   * @default false
   */
  html?: boolean;
}

const Attributes: Prxmpt.EC<AttributesProps> = (props) => {
  return Object.entries(props.attributes ?? {})
    .filter(([key, value]) => value !== undefined)
    .reduce((retval, [key, value]) => {
      if(value !== false) {
        const valueString = typeof value === "string" || typeof value === "number"
          ? <dq>{value}</dq>
          : "";
        return `${retval} ${key}${valueString}`;
      } else {
        return retval;
      }
    }, "");
};

export const tag: Prxmpt.OC<TagProps> = (props) => {
  if(props.children !== undefined && (!Array.isArray(props.children) || props.children.length > 0)) {
    const text = Prxmpt.render(props.children);
    const block = text.includes("\n");
    return (
      <bracket
        hide={props.hide}
        block={!props.inline}
        prefix={
          <span>
            <angle>{props.name}<Attributes attributes={props.attributes} /></angle>
            <br hide={!block} />
          </span>
        }
        suffix={
          <angle>/{props.name}</angle>
        }>
        <indent unless={!block || props.noIndent} inline={!block}>{text}</indent>
      </bracket>
    );
  } else {
    return (
      <angle
        hide={props.hide}
        block={!props.inline}>
        {props.name}
        <Attributes attributes={props.attributes} />
        {" /"}
      </angle>
    );
  }
}
