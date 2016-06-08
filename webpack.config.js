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
    dist: path.join(__dirname, 'dist'),
    dev: path.join(__dirname, 'dev')
};



var BASE_CFG = {
    resolve: {
        extensions: ['', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader"
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=[path][name].[ext]',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader"
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })]
};




var DEV_CFG = {
    entry: {
        'dev/bundle': [path.join(PATHS.dev, 'app.tsx')]
        // index: path.join(PATHS.src, 'index.tsx'),
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        // publicPath: '/dev/'
        //library: 'Calendarium',
        //libraryTarget: 'umd'

    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        /* show progress bar while processing */
        // progress: true,
        // display only errors to reduce the amount of output
        stats: 'errors-only',
        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Make html file from template
        new HtmlWebpackPlugin({
            template: path.join(PATHS.dev, 'index.html'),
            filename: 'index.html',
            title: 'Calendarium',
            inject: false
        })
        // Basic Usage
        //new HtmlWebpackPlugin()
    ]
}


var BUILD_CFG = {
    entry: {
        'dist/calendarium': [path.join(PATHS.src, 'calendarium.ts')],
        'dist/calendar': [path.join(PATHS.src, 'calendar/Calendar.tsx')],
        'dist/datepicker': [path.join(PATHS.src, 'Datepicker.tsx')]
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        library: 'Calendarium',
        libraryTarget: 'umd'
        // publicPath: '/'
    },
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
        new CleanPlugin([PATHS.dist])
    ],
    externals: {
        'react-dom': {
            root: 'ReactDOM',
            amd: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom'
        },
        'react': {
            root: 'React',
            amd: 'React',
            commonjs: 'react',
            commonjs2: 'react'
        }
    }
}



var FRONTEND_CFG = BASE_CFG;

if (TARGET === 'start' || !TARGET) {
    FRONTEND_CFG = _.mergeWith(FRONTEND_CFG, DEV_CFG, customizer);
}

if (TARGET === 'compile:dist') {
    FRONTEND_CFG = _.mergeWith(FRONTEND_CFG, BUILD_CFG, customizer);
}


// The function to customize assigned values.
function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}


module.exports = [FRONTEND_CFG];