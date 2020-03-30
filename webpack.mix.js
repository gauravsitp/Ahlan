const mix = require('laravel-mix');

mix
    .copy('node_modules/@fortawesome', 'fonts/')
    .webpackConfig({
        devtool: 'inline-source-map'
    })
    .sass('scss/bootstrap.scss', 'css/')
    .sass('scss/style.scss', 'css/')
    .sourceMaps()
    .options({ processCssUrls: false });