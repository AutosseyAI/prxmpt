import asArray from "as-typed-array";
import * as Prxmpt from "../../index.js";

export const or: Prxmpt.PC = (props) => {
  const items = asArray(props.children).flat().filter(Boolean);
  if(items.length > 1) {
    const first = items.slice(0, -1);
    return <>{first.join(", ")} or {items[items.length - 1]}</>;
  } else {
    return Prxmpt.render(items);
  }
};
