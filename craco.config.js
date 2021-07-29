const CracoAntDesignPlugin = require('craco-antd');
const CracoAlias = require("craco-alias");
module.exports = {
    plugins: [{
        plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                '@primary-color': '#1DA57A',
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