# Linting configs by spacetab.io

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
> ###### Martin Fowler


#### Configs:
- [Stylelint](./packages/stylelint-config-spacetab-io)
- [Eslint](./packages/eslint-config-spacetab-io)
---

#### Content:
- [⚙ Eslint config integration](#eslint-config-integration)
- [⚙ Stylelint config integration](#stylelint-config-integration)

## Eslint config integration

First, what you need is to install npm package.
```bash
npm install --save-dev @spacetab-io/eslint-config-spacetab-io
```

Next, install all peer dependencies. The easiest way is to add this lines to your `devDependensies`
```json
{
  "eslint": "^6.6.0",
  "@typescript-eslint/parser": "^2.9.0",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-simple-import-sort": "^4.0.0",
  "eslint-plugin-vue": "^6.0.0",
  "@typescript-eslint/eslint-plugin": "^2.6.1",
  "@vue/eslint-config-typescript": "^4.0.0",
  "vue-eslint-parser": "^7.0.0",
  "typescript": "^3.6.4",
  "babel-eslint": "^10.0.3"
}
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

[⬆ Go top](#linting-configs-by-spacetabio)

------

## Stylelint config integration

First, what you need is to install npm package.
```bash
npm install --save-dev @spacetab-io/eslint-config-spacetab-io
```

Next, install all peer dependencies. The easiest way is to add this lines to your `devDependensies`
```json
{
  "stylelint": "^10.1.0",
  "stylelint-config-recess-order": "^2.0.3",
  "stylelint-config-standard": "^18.3.0",
  "stylelint-declaration-use-variable": "^1.7.0",
  "stylelint-scss": "^3.9.3"
}
```

After previous operations add this to your eslint configuration.
```json
{
  "extends": ["@spacetab-io/stylelint-config-spacetab-io"]
}
```

**PROFIT!** Now you can use our stylelint configuration in your awesome projects!

[⬆ Go top](#linting-configs-by-spacetabio)
