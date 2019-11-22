module.exports = {
    plugins: [
        "import",
        "simple-import-sort",
    ],
    rules: {
        ...require('./rules/javascript.js'),
    }
};
