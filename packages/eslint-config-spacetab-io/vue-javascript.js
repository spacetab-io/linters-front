module.exports = {
    plugins: [
        'import',
        'simple-import-sort',
        'vue',
    ],
    rules: {
        ...require('./rules/javascript.js'),
    },
    parser: 'babel-eslint',
    overrides: [
        {
            files: ['*.vue'],
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
            extends: ['plugin:vue/base'],
            rules: [
                ...require('./rules/vue-html.js'),
            ],
        }
    ]
};
