module.exports = {
    env: {
        commonjs: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 12,
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
    rules: {},
    plugins: [
        'sort-keys-fix',
    ],
};
