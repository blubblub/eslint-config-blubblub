module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'simple-import-sort',
    ],
    rules: {
        'node/no-missing-import': [
            'error',
            {
                tryExtensions: ['.js', '.json', '.node', '.ts'],
            },
        ],
        'node/no-unsupported-features/es-syntax': [
            'error',
            {
                ignores: [
                    'modules',
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {},
        },
    },
};
