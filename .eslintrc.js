module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'prefer-const': ['error', { destructuring: 'all' }],
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/html-indent': ['error', 4],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/camelcase': 'off'
    }
};
