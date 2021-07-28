const CracoAntDesignPlugin = require('craco-antd');
const CracoAlias = require("craco-alias");
module.exports = {
    plugins: [{
        plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                '@primary-color': '#ffffff',
            },
        },
    }, {
        plugin: CracoAlias,
        options: {
            source: "tsconfig",
            baseUrl: "./src",
            tsConfigPath: "./tsconfig.extend.json"
        },
    }],

};