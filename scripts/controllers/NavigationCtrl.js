angular.module( 'jevitecaApp' ).controller( 'NavigationCtrl', [ '$scope', '$routeSegment', function ( $scope, $routeSegment ) {

    // Comprobamos las rutas de navegación y establecemos la pestaña seleccionada como activa.
    $scope.routeIsAlbums = function () {

        return $routeSegment.startsWith( 'albums' )

    };

    $scope.routeIsBands = function () {

        return $routeSegment.startsWith( 'bands' )

    };

    $scope.routeIsGenres = function () {

        return $routeSegment.startsWith( 'genres' )

    };
} ] );
