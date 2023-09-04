import compromise from "compromise";
import * as Prxmpt from "../../index.js";

export interface NounProps {
  plural?: boolean;
  singular?: boolean;
};

export const noun: Prxmpt.PC<NounProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.plural) {
    text = compromise(text).nouns().toPlural().text();
  } else if(props.singular) {
    text = compromise(text).nouns().toSingular().text();
  }
  return text;
};
