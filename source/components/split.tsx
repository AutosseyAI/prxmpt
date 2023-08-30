import * as Prxmpt from "../";

type SplitProps = {
  on: string;
};

export const split: Prxmpt.PC<SplitProps> = (props) => {
  const string = Prxmpt.Fragment(props);
  return string.split(props.on);
};
