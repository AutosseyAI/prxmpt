import { createElement, Fragment } from "./index.js";

type Source = {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
};

function jsx(
  type: Parameters<typeof createElement>[0],
  props: any,
  key: string | number | boolean | undefined
) {
  if(key !== undefined) {
    return createElement(type, {
      ...props,
      key
    });
  } else {
    return createElement(type, props);
  }
}

function jsxDEV(
  type: Parameters<typeof createElement>[0],
  props: any,
  key: string | number | boolean | undefined,
  isStaticChildren: boolean,
  source: Source | undefined,
  self: unknown
) {
  return jsx(type, props, key);
}


export {
  jsx,
  jsx as jsxs,
  jsxDEV,
  Fragment
};
