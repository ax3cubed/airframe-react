var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir:                root,
    // Targets ========================================================
    serveDir:               path.join(root, '.serve'),
    distDir:                path.join(root, 'dist'),
    clientManifestFile:     'manifest.webpack.json',
    clientStatsFile:        'stats.webpack.json',

    // Source Directory ===============================================
    srcDir:                 path.join(root, 'app'),
    srcServerDir:           path.join(root, 'server'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'iTrend',
    siteDescription:        'iTrend is here to make you happy. created simply for fun and interaction!!',
    siteCannonicalUrl:      'http://localhost:4100',
    siteKeywords:           'Options this or that favorite Lover soulmate quiz fun friends love play buddy happy connected intimate laugh itrend questions relationship food about me cloths bestie pal girlfriend boyfriend partner outing colour',
    scssIncludes:           []
}

module.exports = config;