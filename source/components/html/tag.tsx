import * as Prxmpt from "../../index.js";

export interface AttributesProps {
  attributes?: Record<string, string | number | boolean | undefined>;
}

export interface TagProps extends Prxmpt.TextProps, AttributesProps {
  /**
   * Name of the tag.
   */
  name: string;
  /**
   * @default false
   */
  noIndent?: boolean;
  /**
   * Defaults to true if the content contains a newline.
   */
  wrap?: boolean;
}

export interface HTMLProps extends Prxmpt.TextProps, AttributesProps {
  /**
   * @default false
   */
  html?: boolean;
}

function attributes(props: AttributesProps) {
  return Object.entries(props.attributes ?? {})
    .filter(([key, value]) => value !== undefined)
    .reduce((retval, [key, value]) => {
      if(value !== false) {
        return Prxmpt.render(
          <text>
            {retval}
            <space />
            {key}
            {
              typeof value === "string" || typeof value === "number"
                ? <text>=<dq>{value}</dq></text>
                : <empty />
            }
          </text>
        );
      } else {
        return retval;
      }
    }, "");
}

export const tag: Prxmpt.OC<TagProps> = (props) => {
  if(Prxmpt.hasChildren(props)) {
    const text = Prxmpt.render(props.children);
    const wrap = props.wrap ?? text.includes("\n");
    return (
      <text
        {...props}
        prefix={
          <text>
            <angle>{props.name}{attributes(props)}</angle>
            <br hide={!wrap} />
          </text>
        }
        suffix={
          <text>
            <br hide={!wrap} />
            <angle>/{props.name}</angle>
          </text>
        }>
        <text indent={wrap && !props.noIndent}>
          {text}
        </text>
      </text>
    );
  } else {
    return (
      <text {...props}>
        <angle>
          {props.name}
          {attributes(props)}
          {" /"}
        </angle>
      </text>
    );
  }
};
