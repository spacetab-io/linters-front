# Eslint config by spacetab.io

**Now supports Vue 3!**

For Vue 2 use [0.1.0 version](https://github.com/spacetab-io/linters-front/tree/0.1.0/packages/eslint-config-spacetab-io) of this library.

> Programs must be written for people to read, and only incidentally for machines to execute. 
> ###### Harold Abelson

#### Content:
- [⚙ Eslint config integration](#eslint-config-integration)
- [◉ Eslint config options](#eslint-config-options)


## Eslint config integration

First, what you need is to install npm package.
```bash
npm install --save-dev @spacetab-io/eslint-config-spacetab-io
```

Next, install all peer dependencies. The easiest way is to add this lines to your `devDependensies`
```json
{
  "eslint": "^6.7.2",
  "eslint-plugin-import": "^2.20.2",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  "eslint-import-resolver-webpack": "^0.13.1",
  "eslint-plugin-vue": "^7.0.0",
  "@typescript-eslint/eslint-plugin": "^4.18.0",
  "@typescript-eslint/parser": "^4.18.0",
  "@vue/eslint-config-typescript": "^7.0.0",
  "vue-eslint-parser": "^7.8.0",
  "typescript": "~4.1.5",
  "babel-eslint": "^10.1.0"
}
```

```bash
npm install --save-dev eslint@^6.7.2 eslint-plugin-import@^2.20.2 eslint-plugin-simple-import-sort@^7.0.0 eslint-import-resolver-webpack@^0.13.1 eslint-plugin-vue@^7.0.0 @typescript-eslint/eslint-plugin@^4.18.0 @typescript-eslint/parser@^4.18.0 @vue/eslint-config-typescript@^7.0.0 vue-eslint-parser@~4.1.5 babel-eslint@^10.1.0
```

After previous operations add this to your eslint configuration.
```json
{
  "extends": [
    "@spacetab-io/eslint-config-spacetab-io"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module",
    "extraFileExtensions": [".vue"]
  }
}
```
**PROFIT!** Now you can use our eslint configuration in your awesome projects!

> Minimal eslint configuration example 
```json
{
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module",
    "extraFileExtensions": [".vue"]
  },
  "extends": [
    "@spacetab-io/eslint-config-spacetab-io"
  ]
}
```

[⬆ Go top](#eslint-config-by-spacetabio)

---

## Eslint config options

### Here we have 3 configs:

#### base
- vue linting
- typescript
- javascript linting

Usage:
```json
{
  "extends": ["@spacetab-io/eslint-config-spacetab-io"]
}
```

> Also, If you have typescript and javascript `.vue` files. You can change the extension from `.vue` to `.js.vue`. Linter will check code in these components like a javascript.


#### vue javascript only
> Combined `vue-html` and `javascript` rules

Usage:
```json
{
  "extends": ["@spacetab-io/eslint-config-spacetab-io/vue-javascript"]
}
```

#### only vue html
Usage:
```json
{
  "extends": ["@spacetab-io/eslint-config-spacetab-io/vue-html"]
}
```

#### only typescript
Usage:
```json
{
  "extends": ["@spacetab-io/eslint-config-spacetab-io/typescript"]
}
```

#### only javascript
Usage:
```json
{
  "extends": ["@spacetab-io/eslint-config-spacetab-io/javascript"]
}
```

[⬆ Go top](#eslint-config-by-spacetabio)
