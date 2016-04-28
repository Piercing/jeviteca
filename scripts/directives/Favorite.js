angular
    .module( "jevitecaApp" )
    .directive( "favorite", function () {

        return {
            restrict   : "AE",
            replace    : true,
            templateUrl: "views/Favorites.html",
            scope      : {
                id  : "=",
                tipo: "@"
            },
            link       : function ( scope ) {

                // Key dinámica para cada entidad y tipo.
                var webStorageKey = scope.tipo + "_" + scope.id + "_fav";

                // Comprobar si el navegador soporta 'localStorage'
                scope.supportedBrowser = function () {
                    return typeof(Storage) !== "undefined";
                };

                // Comprobar si es favorito
                scope.isFavorite = function () {
                    return localStorage.getItem( webStorageKey ) == "true";
                };

                // Comprobar si está marcado como favorito, si es favorito pasa
                // a no favorito y viceversa => (estrella llena, estrella vacía)
                scope.changeSelection = function () {
                    scope.isFavorite() ? localStorage.removeItem( webStorageKey ) : localStorage.setItem( webStorageKey, "true" );
                };
            }
        };
    } );