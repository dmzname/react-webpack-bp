import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./types/config";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {

    const fontLoader = {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
            filename: './assets/fonts/[name][ext]',
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader',
        ]
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fontLoader,
        svgLoader,
        fileLoader,
        typescriptLoader,
        cssLoader,
    ];
}