# Examples

This directory contains examples of using `Prxmpt` in various situations.

**Automatic Mode** _(Recommended)_ - These examples use the `jsxImportSource` field in `tsconfig.json`, and do not require importing `@autossey/prxmpt` in each file that uses `Prxmpt`.

**Classic Mode** - These examples use the `jsxFactory` and `jsxFragmentFactory` fields in `tsconfig.json`, and require importing `@autossey/prxmpt` in each file that uses `Prxmpt`.

---

**Element Usage Examples:**
- [kitchen sink](./examples/kitchen-sink/source/Prompt.tsx) (Showcases many elements)
- [priority](./examples/priority/) (A few examples of the `<priority>` element)

**Setup Examples (TypeScript):**
- [bun](./examples/bun/)
- [bun (classic mode)](./examples/bun-classic/)
- [Next.js](./examples/next/)
- [swc](./examples/swc/)
- [swc (classic mode)](./examples/swc-classic/)
- [ts-node](./examples/ts-node/)
- [ts-node (classic mode)](./examples/ts-node-classic/)
- [tsc](./examples/tsc/)
- [tsc (classic mode)](./examples/tsc-classic/)

**Setup Examples (JavaScript):**
- [node --loader @autossey/prxmpt](./examples/node-loader/)
- [swc](./examples/swc-js/)
- [swc (classic mode)](./examples/swc-js-classic/)
