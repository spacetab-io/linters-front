module.exports = {
    plugins: [
        'import',
        'simple-import-sort',
    ],
    parser: 'babel-eslint',
    rules: {
        ...require('./rules/javascript.js'),
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: 'babel-eslint',
            },
            plugins: [
                'import',
                'simple-import-sort',
                'vue',
            ],
            extends: ['plugin:vue/base'],
            rules: {
                ...require('./rules/vue-html.js'),
            },
        }
    ]
};
