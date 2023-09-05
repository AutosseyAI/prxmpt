import * as Prxmpt from "../../index.js";

export type Case = "capital" | "lower" | "title" | "upper";

export interface CasingProps {
  case?: Case;
}

export const casing: Prxmpt.PC<CasingProps> = (props) => {
  switch(props.case) {
    case "capital":
      return <capital>{props.children}</capital>;
    case "lower":
      return <lower>{props.children}</lower>;
    case "title":
      return <title>{props.children}</title>;
    case "upper":
      return <upper>{props.children}</upper>;
    default:
      return <>{props.children}</>;
  };
};

export * from "./capital.js";
export * from "./lower.js";
export * from "./title.js";
export * from "./upper.js";
