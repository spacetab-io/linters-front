module.exports = {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/ban-types': [
        'error',
        {
            'types': {
                'Object': 'Use {} instead',
                'String': {
                    'message': 'Use string instead',
                    'fixWith': 'string'
                }
            }
        }
    ],
    '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
            'assertionStyle': 'never'
        }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
        'error', {
            'accessibility': 'explicit',
            'overrides': {
                'constructors': 'no-public'
            }
        }
    ],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-naming':	'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function':	'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-parens': [
        'error',
        'all',
        {
            'enforceForNewInMemberExpressions': false,
            'enforceForArrowConditionals': false,
            'nestedBinaryExpressions': false
        }
    ],
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': [
        'error',
        {
            'ignoreParameters': true,
            'ignoreProperties': true
        }
    ],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion':	'error',
    '@typescript-eslint/no-parameter-properties': [
        'error',
        {
            'allows': [
                'readonly',
                'private',
                'protected',
                'public',
                'private readonly',
                'protected readonly',
                'public readonly'
            ]
        }
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias':	'error',
    '@typescript-eslint/no-type-alias':	'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments':	'error',
    '@typescript-eslint/no-unnecessary-type-assertion':	'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': ['error', { 'path': 'never', 'types': 'never', 'lib': 'never' }],
    '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
            'before': false,
            'after': true,
            'overrides': {
                'arrow': {
                    'before': true,
                    'after': true
                }
            }
        }
    ],
    '@typescript-eslint/typedef': ['error', { 'objectDestructuring': false }],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'off'
};
