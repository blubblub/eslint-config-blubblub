module.exports = {
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'simple-import-sort',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
