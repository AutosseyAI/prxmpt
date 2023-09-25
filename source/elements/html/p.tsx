import * as Prxmpt from "../../index.js";

export const p: Prxmpt.PC<Prxmpt.HTMLProps> = (props) => {
  if(props.html) {
    return <tag name="p" {...props} />;
  } else {
    return (
      <text {...props}>
        {props.children}<br />
      </text>
    );
  }
};
