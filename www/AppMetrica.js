(function (global) {
    var AppMetrica;
    AppMetrica = function () {
    };

    AppMetrica.prototype.activate = function (args) {
        cordova.exec(function(winParam) {},
            function(error) {
                console.warn('cordova.exec ' + error)
            },
            "AppMetricaPlugin",
            "activate",
            [args]);
    };

    AppMetrica.prototype.reportEvent = function (event, params) {
        cordova.exec(function(winParam) {},
            function(error) {
                console.warn('cordova.exec ' + error)
            },
            "AppMetricaPlugin",
            "reportEvent",
            [event, params]);
    };


    global.cordova.addConstructor(function() {
        if (!global.Cordova) {
            global.Cordova = global.cordova;
        };

        if (!global.plugins) {
            global.plugins = {};
        }

        global.plugins.appMetrica = new AppMetrica();
    });
}(window));
