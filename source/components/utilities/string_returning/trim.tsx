import * as Prxmpt from "../../../index.js";

export interface TrimProps {
  /**
   * Trim the start only.
   */
  start?: boolean;
  /**
   * Trim the end only.
   */
  end?: boolean;
}

export const trim: Prxmpt.PC<TrimProps> = (props) => {
  const string = Prxmpt.Fragment(props);
  if(props.start && !props.end) {
    return string.trimStart();
  }
  if(props.end && !props.start) {
    return string.trimEnd();
  }
  return string.trim();
};
