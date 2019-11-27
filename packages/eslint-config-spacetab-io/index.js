module.exports = {
    env: {
        es6: true,
        amd: true,
        node: true,
        commonjs: true,
    },
    overrides: [
        // .js
        {
            parser: 'babel-eslint',
            files: ['*.js'],
            rules: require('./rules/javascript.js'),
        },
        // .ts
        {
            parser: '@typescript-eslint/parser',
            files: ['*.ts'],
            plugins: [
                '@typescript-eslint',
                'import',
                'simple-import-sort',
            ],
            rules: {
                ...require('./rules/javascript.js'),
                ...require('./rules/typescript-reset.js'),
                ...require('./rules/typescript.js'),
            }
        },
        // .vue (all)
        {
            files: ['*.vue'],
            extends: ['plugin:vue/base'],
            plugins: [
                'vue',
            ],
            rules: {
                ...require('./rules/vue-html.js'),
            },
        },
        // .vue (javascript)
        {
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            files: ['*.js.vue'],
            extends: ['plugin:vue/base'],
            rules: {
                ...require('./rules/vue-html.js'),
                ...require('./rules/javascript.js'),
                ...require('./rules/vue-reset.js'),
            },
        },
        // vue (typescript)
        {
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            files: ['*.vue'],
            excludedFiles: ['*.js.vue'],
            plugins: [
                '@typescript-eslint',
                'import',
                'simple-import-sort',
            ],
            extends: ['plugin:vue/base'],
            rules: {
                ...require('./rules/javascript.js'),
                ...require('./rules/typescript-reset.js'),
                ...require('./rules/typescript.js'),
                ...require('./rules/vue-typescript-reset.js'),
                ...require('./rules/vue-reset.js'),
            }
        },
    ],
};
