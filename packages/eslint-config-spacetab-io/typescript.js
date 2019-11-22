module.exports = {
    overrides: [
        {
            parser: "@typescript-eslint/parser",
            files: ["*.vue", "*.ts"],
            excludedFiles: ["*.js.vue"],
            plugins: [
                '@typescript-eslint',
                "import",
                "simple-import-sort",
            ],
            rules: {
                ...require('./rules/javascript.js'),
                ...require('./rules/typescript-reset.js'),
                ...require('./rules/typescript.js'),
            }
        },
        {
            files: ["*.vue"],
            rules: require('./rules/vue-typescript-reset.js'),
        },
    ],
};
