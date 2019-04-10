# karma-typescript-issue

## Workaround
To make karma-typescript work in a setup like this, it is required to refere to the module directly instead of using the path to the node module (in both the karma and typescript config).

`node_modules/module-a` becomes `../module-a`.

This however is not a good solution, as it requires maintaining the relative path to the symlinked module in at least three places (package.json, karma.config.js & tsconfig.js).

## Issue Description

### Setup
- in `module-a` run `npm install`
- in `module-b` run `npm install`

### Run Karma
- `npm run test`

### Issue:
`module-a` gets hooked into `module-b` using symlinks and the symlink is resolved for the require lookup only - not for the entry in the `commonjs` `global.wrappers` array.

When debugging `karma-typescript/dist/client/commonjs.js` `module-a` is registered as `<absPath>/module-b/node_modules/module-a/src/index.ts`, as one would expect.

But when the require of `module-a` is resolved in `module-b`, the filename used for the lookup is `<absPath>/module-a/src/index.ts`.

Therefore the `module-a` cannot be resolved and the execution fails.