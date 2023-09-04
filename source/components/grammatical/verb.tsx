import compromise from "compromise";
import * as Prxmpt from "../../index.js";

export type VerbForm = "past" | "present" | "future" | "infinitive" | "gerund";

export interface VerbProps {
  form?: VerbForm;
  negative?: boolean;
  positive?: boolean;
};

function applyForm(text: string, form: VerbForm) {
  const doc = compromise(text);
  const verb = doc.verbs();
  switch(form) {
    case "past":
      return verb.toPastTense().text();
    case "present":
      return verb.toPresentTense().text();
    case "future":
      return verb.toFutureTense().text();
    case "infinitive":
      return verb.toInfinitive().text();
    case "gerund":
      return verb.toGerund().text();
    default:
      return text;
  };
}

export const verb: Prxmpt.PC<VerbProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.form) {
    text = applyForm(text, props.form);
  }
  if(props.negative) {
    text = compromise(text).verbs().toNegative().text();
  } else if(props.positive) {
    text = compromise(text).verbs().toPositive().text();
  }
  return text;
};
