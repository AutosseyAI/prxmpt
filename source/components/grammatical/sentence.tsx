import compromise from "compromise";
import * as Prxmpt from "../../index.js";

type SentenceTense = "past" | "present" | "future" | "infinitive";

export interface SentenceProps {
  tense?: SentenceTense;
  negative?: boolean;
  positive?: boolean;
};

function applyTense(text: string, tense: SentenceTense) {
  const doc = compromise(text).sentences();
  switch(tense) {
    case "past":
      return doc.toPastTense().text();
    case "present":
      return doc.toPresentTense().text();
    case "future":
      return doc.toFutureTense().text();
    case "infinitive":
      return doc.toInfinitive().text();
    default:
      return text;
  };
}

export const sentence: Prxmpt.PC<SentenceProps> = (props) => {
  let text = Prxmpt.render(props.children);
  if(props.tense) {
    text = applyTense(text, props.tense);
  }
  if(props.negative) {
    text = compromise(text).sentences().toNegative().text();
  } else if(props.positive) {
    text = compromise(text).sentences().toPositive().text();
  }
  return text;
};
