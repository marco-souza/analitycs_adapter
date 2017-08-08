const
    path                        = require("path"),
    CleanWebpackPlugin          = require("clean-webpack-plugin"),
    dist                        = path.resolve(__dirname, "lib")
    
// definition typescript bundler Plugin
function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'analytics_adapter',
            main: dist + '/src/**/*.d.ts',
            out: dist + '/index.d.ts',
            removeSource: true,
            outputAsModuleFolder: true
        });
    });
};

module.exports = {  // First off all, create a app element

    entry: {
        main: path.resolve(__dirname, "src/app/index.ts")
    },
    output: {
        path: dist,
        chunkFilename: "[chunkhash].js",
        filename: "index.js"
    },

    module: {
        rules: [
            // Typescript
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ]
    },
    plugins: [
        // JSdoc
        // new JsDocPlugin({ conf: ".jsdoc.conf.json" }),

        // .d.ts Generator
        new CleanWebpackPlugin(dist),
        new DtsBundlePlugin(),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ]
    }
}
