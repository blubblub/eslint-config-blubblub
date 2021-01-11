module.exports = {
    rules: {
        indent: [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'arrow-parens': [
            'error',
            'as-needed',
        ],
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
        'max-len': [
            'error',
            {
                code: 120,
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
    },
};
