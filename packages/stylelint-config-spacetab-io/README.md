# Stylelint config by spacetab.io

> if you can write "hello world" you can change the world
> ###### Raghu Venkatesh


## Stylelint config integration

First, what you need is to install npm package.
```bash
npm install --save-dev @spacetabs/eslint-config-spacetab-io
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
  "extends": ["@spacetabs/stylelint-config-spacetab-io"]
}
```

**PROFIT!** Now you can use our stylelint configuration in your awesome projects!


[⬆ Go top](#stylelint-config-by-spacetabio)
