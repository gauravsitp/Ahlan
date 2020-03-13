const mix = require('laravel-mix');

mix
    .copy('node_modules/@fortawesome', 'fonts/')
    .webpackConfig({

    })
    .sass('scss/bootstrap.scss', 'css/')
    .sass('scss/style.scss', 'css/')
    .options({ processCssUrls: false });