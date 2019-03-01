# karma-typescript-issue

## Setup
- in `module-a` run `npm install`
- in `module-b` run `npm install`

## Run Karma
- `npm run test`

## Issue:
`module-a` gets hooked into `module-b` using symlinks and the symlink is resolved for the require lookup only - not for the entry in the `commonjs` `global.wrappers` array.

When debugging `karma-typescript/dist/client/commonjs.js` `module-a` is registered as `<absPath>/module-b/node_modules/module-a/src/index.ts`, as one would expect.

But when the require of `module-a` is resolved in `module-b`, the filename used for the lookup is `<absPath>/module-a/src/index.ts`.

Therefore the `module-a` can not be resolved and the execution fails.