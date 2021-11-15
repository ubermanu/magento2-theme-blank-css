const postcssImport = require('postcss-import');
const postcssEnvFunction = require('postcss-env-function');
const postcssNesting = require('postcss-nesting')

const environmentVariables = {
    '--screen__xxs': '320px',
    '--screen__xs': '480px',
    '--screen__s': '640px',
    '--screen__m': '768px',
    '--screen__l': '1024px',
    '--screen__xl': '1440px',
}

module.exports = {
    parser: require('postcss-comment'),
    plugins: [
        postcssImport(),
        postcssNesting({ allowDeclarationsAfterNestedRules: true }),
        // TODO: This does not work with the single line comments parser
        // postcssEnvFunction({ importFrom: [{ environmentVariables }] }),
    ]
}
