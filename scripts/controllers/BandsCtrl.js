// Controlador para la vista de las Bands
angular
    .module( 'jevitecaApp' )
    .controller( 'BandsCtrl', [ '$scope', 'Bands', '$filter',
        function ( $scope, Bands, $filter ) {

            $scope.bands = $filter( 'orderBy' )( Bands.data, name );

        } ] );