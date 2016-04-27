angular
    .module ( 'jevitecaApp' )
    .controller ( 'AlbumsDetailsCtrl', [ '$scope', 'Album', 'RouteService', '$window',
    function ( $scope, Album, RouteService, $window ) {

        $scope.albums = Album;

        $scope.routeImage = function ( route ) {

            return RouteService.getRouteImage ( route )
        };

        $scope.getYouTubeLink = function ( bandName, trackName ) {
            var url = RouteService.getYouTubeLink ( bandName , trackName );
            $window.open ( url, '_blank' );
        };

    } ] );