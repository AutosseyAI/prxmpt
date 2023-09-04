import compromise from "compromise";
import * as Prxmpt from "../../index.js";

export type AdjectiveDegree = "comparative" | "superlative";

export type AdjectiveForm = AdjectiveDegree | "adverb" | "noun";

export interface AdjectiveProps {
  form?: AdjectiveForm;
};

function applyForm(text: string, form: AdjectiveForm) {
  const doc = compromise(text);
  const adjective = doc.adjectives();
  switch(form) {
    case "comparative":
      return adjective.toComparative().text();
    case "superlative":
      return adjective.toSuperlative().text();
    case "adverb":
      return adjective.toAdverb().text();
    case "noun":
      return adjective.toNoun().text();
    default:
      return text;
  };
}

export const adjective: Prxmpt.PC<AdjectiveProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.form) {
    text = applyForm(text, props.form);
  }
  return text;
};
