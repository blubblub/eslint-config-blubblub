module.exports = {
    env: {
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:eslint-comments/recommended',
        'plugin:node/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        './base.js',
        './jest.js',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: [
        'sort-keys-fix',
    ],
    rules: {},
};
