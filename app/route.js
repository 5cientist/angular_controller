var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/linux", {
            template : "<br><h3>LINUX</h3><br><p>You selected LINUX</p>"
        })
        .when("/windows", {
            template : "<br><h3>WINDOWS</h3><br><p>You selected WINDOWS</p>"
        })
        .when("/macos", {
          template : "<br><h3>macOS</h3><br><p>You selected macOS</p>"
      })
        .otherwise({
            template : "<p></p>"
        });
    });