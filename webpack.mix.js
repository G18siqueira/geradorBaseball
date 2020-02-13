const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');



mix
    .setPublicPath('public')
    .webpackConfig({
        plugins: [
            new LiveReloadPlugin(),
        ]
    })
    .js('resources/js/main.js', 'js')
    .js('resources/js/html2canvas.js', 'js')
    .sass('resources/scss/styles.scss', 'css',{
        includePaths: ['node_modules']
    })
    .options({
        processCssUrls: false
     })
    .copy('resources/index.html', 'public/index.html')
    .copy('resources/chamadas.html', 'public/chamadas.html')
    .copy('resources/classificacao.html', 'public/classificacao.html')
    .copy('resources/resultados.html', 'public/resultados.html')
    .copyDirectory('resources/img', 'public/img')
    .copyDirectory('resources/icomoon/fonts', 'public/fonts');
 