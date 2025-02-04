const js = require('@eslint/js')

module.exports = [
    {
        languageOptions: {
            ecmaVersion: 'latest'
        },
        rules: {
            'no-undef': [''],
            'semi': ['error', 'never'],
            'quotes': [2, 'single'],
            'indent': ['error', 4],
            'no-unused-vars': ['error'],
            'eqeqeq': ['error'],
            'no-multi-spaces': ['error'],
            'no-trailing-spaces': ['error'],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'no-var': ['error'],
            'prefer-const': ['error'],
            'comma-dangle': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'space-in-parens': ['error', 'never'],
            'space-before-function-paren': ['error', 'always'],
            'keyword-spacing': ['error', { 'before': true, 'after': true }],
            'space-infix-ops': ['error'],
            'no-whitespace-before-property': ['error']
        }
    }
]
