const latex = require('markdown-it-latex').default
module.exports = {
    publicPath: '/physics-project/',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: ['vue-loader', {
                        loader: 'vue-md-loader',
                        options: {
                            plugins: [
                                latex
                            ]
                        }
                    }]
                }
            ]
        }
    }
}
