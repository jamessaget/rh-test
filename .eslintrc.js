module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'space-before-function-paren': 'off',
        semi: [2, 'never'],
        quotes: [2, 'single'],
        'sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreDeclarationSort': true,
            'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
            'ignoreMemberSort': true,
            'allowSeparatedGroups': false,
        }],
        'brace-style': [2, '1tbs'],
        'no-multi-spaces': [2, {
            ignoreEOLComments: false
        }],
        'no-multiple-empty-lines': [2, {
            max: 2,
            maxEOF: 0
        }]
    }
}
