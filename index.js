module.exports = {
    env: {
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:eslint-comments/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        './base.js',
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    plugins: [
        'sort-keys-fix',
    ],
    rules: {},
};
