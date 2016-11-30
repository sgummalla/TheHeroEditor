(function(global) {

    var map = {
        'app': "",
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = {
        'app': {
            main: 'app/main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    }

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade',
    ];

    function packageIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    function packageUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packageUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);