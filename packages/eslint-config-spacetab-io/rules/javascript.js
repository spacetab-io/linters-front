module.exports = {
    'for-direction': 'off',
    'getter-return': 'error',
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': [
        'error',
        {
            'checkLoops': false
        }
    ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': [
        'error',
        {
            'allowConstructorFlags': ['u', 'y']
        }
    ],
    'no-irregular-whitespace': [
        'error',
        {
            'skipComments': true,
            'skipRegExps': true,
            'skipTemplates': true
        }
    ],
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': ['error', { 'allowImplicit': true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'off',
    'default-param-last': 'error',
    'dot-location': 'off',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': [
        'error',
        {
            'allowElseIf': false
        }
    ],
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'off',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'error',
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'off',
    'strict': ['error', 'never'],
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': [
        'error',
        {
            'args': 'none'
        }
    ],
    'no-use-before-define': 'error',
    'array-bracket-newline': [
        'error',
        {
            'multiline': true,
            'minItems': 3
        }
    ],
    'array-bracket-spacing': [
        'error',
        'never',
        {
            'singleValue': false,
            'objectsInArrays': false,
            'arraysInArrays': false
        }
    ],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'off', // 'error',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last', {
        'exceptions': {
            'ArrayExpression': false,
            'ArrayPattern': false,
            'ArrowFunctionExpression': false,
            'CallExpression': false,
            'FunctionDeclaration': false,
            'FunctionExpression': false,
            'ImportDeclaration': false,
            'ObjectExpression': false,
            'ObjectPattern': false,
            'VariableDeclaration': false,
            'NewExpression': false,
        }
    }],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'func-names': [
        'error',
        'always',
        {
            'generators': 'as-needed'
        }
    ],
    'func-style': [
        'error',
        'declaration',
        {
            'allowArrowFunctions': true
        }
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': [
        'error', 'consistent'],
    'id-blacklist': 'off',
    'id-length': [
        'error',
        {
            'min': 1,
            'max': 30,
            'exceptions': ['err']
        }
    ],
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': 'off',
    'key-spacing': [
        'error', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'minimum'
        }
    ],
    'keyword-spacing': [
        'error',
        {
            'before': true,
            'after': true
        }
    ],
    'line-comment-position': [
        'error',
        {
            'position': 'above'
        }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
        'error',
        {
            'beforeBlockComment': true,
            'afterBlockComment': false,
            'beforeLineComment': false,
            'afterLineComment': false,
            'allowBlockStart': true,
            'allowBlockEnd': false,
            'allowObjectStart': true
        }
    ],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 3],
    'max-len': [
        'error',
        {
            'code': 120,
            'ignoreComments': true,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true
        }
    ],
    'max-lines': 'off',
    'max-lines-per-function': [
        'error',
        {
            'max': 50,
            'skipBlankLines': true,
            'skipComments': true
        }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': 'off',
    'max-statements-per-line': [
        'error',
        {
            'max': 1
        }
    ],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': 'off',
    'new-cap': [
        'error',
        {
            'newIsCap': true,
            'capIsNew': true,
            'properties': true,
            'capIsNewExceptions': ['Prop', 'Watch', 'Component'],
            'capIsNewExceptionPattern': '.*[Action|Getter|State]$'
        }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
        'error',
        {
            'ignoreChainWithDepth': 2
        }
    ],
    'no-array-constructor': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': [
        'error', {
            'ObjectExpression': { 'minProperties': 4, 'multiline': true, 'consistent': true },
            'ObjectPattern': { 'minProperties': 4, 'multiline': true, 'consistent': true },
            'ImportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true },
            'ExportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true }
        }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'none' } }],
    'padded-blocks': ['error', { 'blocks': 'never' }],
    'padding-line-between-statements': [
        'error',
        {
            'blankLine': 'always',
            'prev': '*',
            'next': 'return'
        }
    ],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
        'error',
        {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'off',
    'wrap-regex': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'off',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { 'array': false }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'off',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': 'off',

    'sort-imports': 'off', // reset
    'import/order': 'off', // reset

    'simple-import-sort/sort': 'error',
    'import/no-unresolved': 'off',
    // 'import/named': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'off',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-namespace': 'off',
    'import/extensions': [
        'error',
        {
            'js': 'never',
            'ts': 'never',
            'd.ts': 'never',
            'json': 'always',
            'types': 'always',
            'type': 'always',
            'old': 'always',
            'png': 'always',
            'svg': 'always',
            '.js.vue': 'always',
            'vue': 'ignorePackages'
        }
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
};
