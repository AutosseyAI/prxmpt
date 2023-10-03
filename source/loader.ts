import fs from "node:fs/promises";
import url from "node:url";
import { transform } from "@swc/core";

export type NodeLoaderHooksFormat = "builtin" | "commonjs" | "dynamic" | "json" | "module" | "wasm";

export type LoaderContext = {
  format: NodeLoaderHooksFormat | null | undefined;
  importAssertions?: {
    type?: "json";
  };
};

export type LoadResult = {
  format: NodeLoaderHooksFormat;
  source: string | Buffer | undefined;
  shortCircuit?: boolean;
};

function isPackageModule(moduleUrl: string) {
  return moduleUrl.includes("/node_modules/");
}

function isJsModule(moduleUrl: string) {
  return (/\.m?jsx?$/i).test(moduleUrl);
}

export async function load(sourceUrl: string, context: LoaderContext, defaultLoad: typeof load): Promise<LoadResult> {
  if(!isJsModule(sourceUrl) || isPackageModule(sourceUrl)) {
    return defaultLoad(sourceUrl, context, defaultLoad);
  }
  const filename = url.fileURLToPath(sourceUrl);
  const rawSource = await fs.readFile(filename, "utf8");
  const { code } = await transform(rawSource, {
    filename,
    jsc: {
      parser: {
        syntax: "ecmascript",
        jsx: true
      },
      target: "esnext",
      transform: {
        react: {
          runtime: "automatic",
          importSource: "@autossey/prxmpt"
        }
      }
    },
    sourceMaps: true
  });
  return {
    format: "module",
    source: code,
    shortCircuit: true
  };
}
