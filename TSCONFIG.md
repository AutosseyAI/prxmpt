# TSConfig

To make it easy to extend a tsconfig from `@autossey/prxmpt`, there are several tsconfig files required:

## tsconfig.json

By default, extending from a package uses the `tsconfig.json` in the root of that package.

Our root tsconfig can be extended using the `extends` property to automatically set `jsx`, `jsxFactory`, and `jsxFragmentFactory`:

```json
{
  "extends": "@autossey/prxmpt"
}
```

## tsconfig.base.json

However, we want a more opinionated tsconfig for working on prxmpt, while still exporting the minimal tsconfig for extending.

`tsconfig.base.json` specifies the settings we want to use during development, building, and testing.

## tsconfig.build.json

This tsconfig specifies the entrypoint and output directory when building the project.

## source/tsconfig.json

This tsconfig is used to control the settings used by your IDE while working on files in the `source` directory by extending `tsconfig.base.json`. This allows us to keep `tsconfig.json` minimal so we can export it to be extended.

## test/tsconfig.json

This tsconfig is used to control the settings used by your IDE while working on files in the `test` directory. In addition to extending `tsconfig.base.json`, it adds `bun-types` since we use bun to run tests but build for node.
