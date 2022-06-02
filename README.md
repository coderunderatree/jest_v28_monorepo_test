# jest_v28_monorepo_test
Test jest v28 with yarn workspaces 

## Jest v28 

Jest v28 is unable to generate coverage for `/packages` when 
- coverageProvider is set to `v8` instead of `babel` and 
- `resetModules` is set to `true` in the config; setting `resetModules` to `false` generates coverage

## Jest v27

Jest v27 is able to generate coverage for both `v8` and `babel` irrespective of the `resetModules` option.