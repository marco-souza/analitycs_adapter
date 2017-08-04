const
    path            = require("path"),
    JsDocPlugin     = require("jsdoc-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname + "/src/app/index.ts")
        // vendor: []
    },
    output: {
        path: path.resolve(__dirname + "/lib"),
        filename: "analytics_adapter.js"
    },
    module: {
        rules: [
            // Typescript
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: [
                    path.resolve(__dirname, "/node_modules"), // libs
                    path.resolve(__dirname, "/src/tests") // libs
                ]
            },
        ]
    },
    plugins: [
        // JSdoc
        new JsDocPlugin({ conf: '.jsdoc.conf.json' }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ]
    }
}
