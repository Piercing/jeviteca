// Controlador para la vista de los Géneros
angular
    .module ( 'jevitecaApp' )
    .controller ( 'GenresCtrl', [ '$scope', 'Genres', '$filter', 'RouteService', '$window',
    function ( $scope, Genres, $filter, RouteService, $window ) {

        $scope.genres = $filter ( 'orderBy' ) ( Genres.data, name );

        $scope.getWikipediaLink = function ( bandName ) {
            var url = RouteService.getWikipediaLink ( bandName );
            $window.open ( url, '_blank' );
        };

    } ] );