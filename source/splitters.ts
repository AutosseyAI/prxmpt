import Prxmpt from "./index.js";

export type SplitterType = keyof typeof splitters;

export const splitters = {
  paragraphs,
  lines,
  spaces,
  words,
  commas,
  chars
} as const;

/**
 * Split `children` on `separator`.
 * If `separator` is `undefined`, no splitting occurs.
 */
export function split(children: Prxmpt.Children, separator?: RegExp | Prxmpt.Children) {
  const string = Prxmpt.render(children);
  if(separator !== undefined) {
    if(separator instanceof RegExp) {
      return string.split(separator).filter(Boolean);
    } else {
      const splitter = Prxmpt.render(separator);
      return string.split(splitter).filter(Boolean);
    }
  } else {
    return [string];
  }
}

export type SeparatorSplitterOptions = {
  retainSeparator?: boolean;
};

/**
 * Split `children` on newlines.
 */
export function paragraphs(children: Prxmpt.Children, options?: SeparatorSplitterOptions) {
  return split(children, options?.retainSeparator ? /(?<=\n\n)/g : "\n\n");
}

/**
 * Split `children` on newlines.
 */
export function lines(children: Prxmpt.Children, options?: SeparatorSplitterOptions) {
  return split(children, options?.retainSeparator ? /(?<=\n)/g : "\n");
}

/**
 * Split `children` on whitespace.
 */
export function spaces(children: Prxmpt.Children, options?: SeparatorSplitterOptions) {
  return split(children, options?.retainSeparator ? /(?<=\s)(?=\S)/g : /\s+/g);
}

/**
 * Split `children` on non-word characters (`[^a-zA-Z0-9_]`).
 */
export function words(children: Prxmpt.Children, options?: SeparatorSplitterOptions) {
  return split(children, options?.retainSeparator ? /(?<=\W)(?=\w)/g : /\W+/g);
}

/**
 * Split `children` on commas.
 */
export function commas(children: Prxmpt.Children, options?: SeparatorSplitterOptions) {
  return split(children, options?.retainSeparator ? /(?<=,)/g : ",");
}

/**
 * Split `children` on each character.
 */
export function chars(children: Prxmpt.Children) {
  return split(children, "");
}
