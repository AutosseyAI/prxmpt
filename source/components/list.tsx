import * as Prxmpt from "../";
import { MapProps } from "./map";

export type ListProps = MapProps;

export const list: Prxmpt.PC<ListProps> = (props) => {
  return (
    <join with={<br />}>
      <map to={props.to}>{props.children}</map>
    </join>
  );
};

export const ol: Prxmpt.PC = (props) => {
  return (
    <list to={(line, index) => `${index+1}. ${line}`}>{props.children}</list>
  );
};

export const ul: Prxmpt.PC = (props) => {
  return (
    <list to={(line) => `- ${line}`}>{props.children}</list>
  );
};
