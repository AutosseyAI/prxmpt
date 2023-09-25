import Prxmpt from "./index.js";

/**
 * Split `children` on `separator`.
 * If `separator` is `undefined`, no splitting occurs.
 */
export function split(children: Prxmpt.Children, separator?: Prxmpt.Children) {
  if(separator !== undefined) {
    const splitter = Prxmpt.render(separator);
    const string = Prxmpt.render(children);
    return string.split(splitter);
  } else {
    return [Prxmpt.render(children)];
  }
}

/**
 * Split `children` on newlines.
 */
export function paragraphs(children: Prxmpt.Children) {
  return split(children, "\n\n");
}

/**
 * Split `children` on newlines.
 */
export function lines(children: Prxmpt.Children) {
  return split(children, "\n");
}

/**
 * Split `children` on spaces.
 */
export function words(children: Prxmpt.Children) {
  return split(children, " ");
}

/**
 * Split `children` on each character.
 */
export function chars(children: Prxmpt.Children) {
  return split(children, "");
}

/**
 * Split `children` on commas.
 */
export function commas(children: Prxmpt.Children) {
  return split(children, ",");
}
