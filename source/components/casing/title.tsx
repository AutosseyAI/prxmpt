import compromise from "compromise";
import * as Prxmpt from "../../index.js";

export const title: Prxmpt.PC = (props) => {
  return (
    <map
      each={(node) => {
        const doc = compromise(Prxmpt.render(node));
        return doc.toTitleCase().text();
      }}>
      {props.children}
    </map>
  );
};
