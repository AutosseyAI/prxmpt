# Examples

This directory contains examples of using `Prxmpt` in various situations.

**Automatic Mode** _(Recommended)_ - These examples use the `jsxImportSource` field in `tsconfig.json`, and do not require importing `@autossey/prxmpt` in each file that uses `Prxmpt`.

**Classic Mode** - These examples use the `jsxFactory` and `jsxFragmentFactory` fields in `tsconfig.json`, and require importing `@autossey/prxmpt` in each file that uses `Prxmpt`.

---

**Element Usage Examples:**
- [kitchen sink](./kitchen-sink/source/Prompt.tsx) (Showcases many elements)
- [priority](./priority/) (A few examples of the `<priority>` element)

**Setup Examples (TypeScript):**
- [bun](./bun/)
- [bun (classic mode)](./bun-classic/)
- [Next.js](./next/)
- [swc](./swc/)
- [swc (classic mode)](./swc-classic/)
- [ts-node](./ts-node/)
- [ts-node (classic mode)](./ts-node-classic/)
- [tsc](./tsc/)
- [tsc (classic mode)](./tsc-classic/)

**Setup Examples (JavaScript):**
- [node --loader @autossey/prxmpt](./node-loader/)
- [swc](./swc-js/)
- [swc (classic mode)](./swc-js-classic/)
