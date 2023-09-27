import { getEncoding } from "js-tiktoken";

const encoder = getEncoding("cl100k_base");

export function counter(string: string) {
  const tokens = encoder.encode(string);
  return tokens.length;
}
