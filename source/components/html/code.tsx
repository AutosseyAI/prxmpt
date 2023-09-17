import * as Prxmpt from "../../index.js";

export const code: Prxmpt.PC<Prxmpt.HTMLProps> = (props) => {
  if(props.html) {
    return <tag name="code" {...props} />
  } else {
    return <bq {...props} />;
  }
};
