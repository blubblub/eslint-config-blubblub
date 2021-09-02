module.exports = {
    rules: {
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        indent: [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
            },
        ],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'sort-keys-fix/sort-keys-fix': 2,
        'space-before-function-paren': [
            'error',
            'always',
        ],
        'unicorn/filename-case': [
            'error',
            {
                case: 'camelCase',
            },
        ],
        'unicorn/prefer-module': 0,
    },
};
