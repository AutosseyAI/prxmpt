#!/usr/bin/env -S node --loader ts-node/esm --no-warnings
import path from "node:path";

const args = process.argv.slice(2);

if(args.length < 1) {
  console.error("Missing path");
  process.exit(1);
}

const relative = args[0];
const props = JSON.parse(args[1] ?? "{}");

async function run() {
  const jsRelative = relative.endsWith(".jsx") || relative.endsWith(".tsx")
    ? relative.slice(0, -3) + "js"
    : relative;
  const absolute = path.join(process.cwd(), jsRelative);
  const module = await import(`${absolute}`);
  const output = module.default(props);
  console.log(output);
}

run();
