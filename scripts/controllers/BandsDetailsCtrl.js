angular
    .module ( 'jevitecaApp' )
    .controller ( 'BandsDetailsCtrl', [ '$scope', 'Band', 'RouteService', '$window',
    function ( $scope, Band, RouteService, $window ) {

        $scope.bands = Band;

        $scope.getWikipediaLink = function ( bandName ) {
            var url = RouteService.getWikipediaLink ( bandName );
            $window.open ( url, '_blank' );
        };
    } ] );