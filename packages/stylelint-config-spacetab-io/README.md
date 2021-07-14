# Stylelint config by spacetab.io

**Now supports Vue 3!**

For Vue 2 use [0.1.0 version](https://github.com/spacetab-io/linters-front/tree/0.1.0/packages/stylelint-config-spacetab-io) of this library.

> if you can write "hello world" you can change the world
> ###### Raghu Venkatesh


## Stylelint config integration

First, what you need is to install npm package.
```bash
npm install --save-dev @spacetab-io/eslint-config-spacetab-io
```

Next, install all peer dependencies. The easiest way is to add this lines to your `devDependensies`
```json
{
  "stylelint": "^13.13.1",
  "stylelint-config-recess-order": "^2.4.0",
  "stylelint-config-standard": "^22.0.0",
  "stylelint-declaration-use-variable": "^1.7.3",
  "stylelint-scss": "^3.19.0"
}
```

```bash
npm install --save-dev stylelint@^13.13.1 stylelint-config-recess-order@^2.4.0 stylelint-config-standard@^22.0.0 stylelint-declaration-use-variable@^1.7.3 stylelint-scss@^3.19.0
```

After previous operations add this to your eslint configuration.
```json
{
  "extends": ["@spacetab-io/stylelint-config-spacetab-io"]
}
```

**PROFIT!** Now you can use our stylelint configuration in your awesome projects!


[⬆ Go top](#stylelint-config-by-spacetabio)
