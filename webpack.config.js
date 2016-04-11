var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const _ = require('lodash');
const CleanPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    src: path.join(__dirname, 'src'),
    node_modules: path.join(__dirname, 'node_modules'),
    distr: path.join(__dirname, 'distr'),
    example: path.join(__dirname, 'example')
};

var BASE_CFG = {
    resolve: {
        extensions: ['', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                include: [PATHS.src, PATHS.example]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[path][name].[ext]',
            },
            {
                test:   /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            },
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })]
};


var FRONTEND_CFG = _.merge(BASE_CFG, {
    //context: PATHS.src,
    entry: {
        'dist/calendarium': [path.join(PATHS.src, 'Calendarium.tsx')],// './index.js',
        'example/bundle': path.join(PATHS.example, 'app.tsx')
        // index: path.join(PATHS.src, 'index.tsx'),
    },
    output: {
        path: __dirname,
        filename: '[name].js'
        // publicPath: '/'
    },
    plugins: [
        // Make html file from template
        new HtmlWebpackPlugin({
            template: path.join(PATHS.example,'index.html'),
            filename: 'index.html',
            title: 'Calendarium',
            inject: false
        })
        // Basic Usage
        //new HtmlWebpackPlugin()
    ]
});


var DEV_CFG = {
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        // display only errors to reduce the amount of output
        stats: 'errors-only',
        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}


var BUILD_CFG = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // Setting DefinePlugin affects React library size!
        // DefinePlugin replaces content "as is" so we need some extra quotes
        // for the generated code to make sense
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new CleanPlugin([PATHS.distr])
    ]
}


if (TARGET === 'start' || !TARGET) {
    FRONTEND_CFG = _.mergeWith(FRONTEND_CFG, DEV_CFG, customizer)
}

if (TARGET === 'build') {
    FRONTEND_CFG = _.mergeWith(FRONTEND_CFG, BUILD_CFG, customizer);
}


// The function to customize assigned values.
function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}


module.exports = [FRONTEND_CFG];