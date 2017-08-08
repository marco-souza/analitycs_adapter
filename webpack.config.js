const
    path            = require("path"),
    JsDocPlugin     = require("jsdoc-webpack-plugin")

module.exports = {// First off all, create a app element

    entry: {
        main: path.resolve(__dirname, "src/app/index.ts")
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "app.js"
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
    // plugins: [
    //     // JSdoc
    //     new JsDocPlugin({ conf: '.jsdoc.conf.json' }),
    // ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ]
    }
}
