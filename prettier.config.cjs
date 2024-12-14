/** @type {import("prettier").Config} */
module.exports = {
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
