var path   = require('path');
var glob   = require('glob');
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/build/app.js
    .addEntry('app', './app/Resources/assets/js/main.js')

    // will output as web/build/global.css
    .addStyleEntry('global', './app/Resources/assets/css/global.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())
    
    // enable the Vue.js loader
    .enableVueLoader()

    .enableTypeScriptLoader()

    .addLoader({
        test: /\.(vue|js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
            loader: 'eslint-loader',
            options: {
                fix: true,
            },
        }
    })
;

function buildEntry() {
    var files = glob.sync('./src/AppBundle/Resources/assets/js/{,**}/*.main.js');

    for (var i = 0; i < files.length; i++) {
        var entry = files[i];
        
        var components = entry.split('/');
        var name = components[2] + '/' + components[6] + '/' + components[7] + '/' + components.slice(8, components.length - 1).join('/');
        var bundleName = name.replace(/\/$/, '');
    
        Encore.addEntry('bundles/' + bundleName + '/' + path.basename(entry, path.extname(entry)), entry);
    }
}

buildEntry();

module.exports = Encore.getWebpackConfig();