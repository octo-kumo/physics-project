const latex = require('@traptitech/markdown-it-katex');
const spoiler = require('@traptitech/markdown-it-spoiler');
module.exports = {
    publicPath: '/physics-project/',
    transpileDependencies: [
        'vuetify'
    ],
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: ['vue-loader', {
                        loader: 'vue-md-loader',
                        options: {
                            markdown: {
                                html: true,
                                linkify: true
                            },
                            plugins: [
                                latex, spoiler
                            ]
                        }
                    }]
                },
                {
                    test: /\.svg$/,
                    use: [
                        'vue-loader',
                        'vue-svg-loader',
                    ],
                },
            ]
        }
    }
}
