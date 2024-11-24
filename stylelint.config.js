export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
        'stylelint-prettier/recommended',
        'stylelint-config-recommended-vue',
    ],
    overrides: [
        {
            files: ['**.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
    },
}
