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
            },
        ],
        'no-restricted-syntax': [
            'error',
            'FunctionExpression',
            'ForInStatement',
            'LabeledStatement',
            'VariableDeclaration',
            'VariableDeclarator',
            'WithStatement',
        ],
    },
};
