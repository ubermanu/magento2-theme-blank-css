const postcssEnvFunction = require('postcss-env-function');

const environmentVariables = {
    '--screen__xxs': '320px',
    '--screen__xs': '480px',
    '--screen__s': '640px',
    '--screen__m': '768px',
    '--screen__l': '1024px',
    '--screen__xl': '1440px',
}

module.exports = {
    plugins: [
        postcssEnvFunction({ environmentVariables })
    ]
}
