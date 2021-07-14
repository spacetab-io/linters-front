module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: false
        },
        requireConfigFile: false,
        allowImportExportEverywhere: false
    },
    extends: ['plugin:vue/vue3-essential'],
    plugins: ['vue'],
    rules: require('./rules/vue-html.js'),
};
