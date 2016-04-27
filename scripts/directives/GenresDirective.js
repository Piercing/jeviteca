angular
    .module ( 'jevitecaApp' )
    .directive ( 'genresDirective', [ 'RouteService', '$window', function ( RouteService, $window ) {

    return {
        restrict   :'AE',
        replace    :true,
        templateUrl:'views/GenresDirective.html',
        scope      :{
            data:'='
        },
        link       :function ( scope ) {

            scope.getWikipediaLink = function ( bandName ) {
                var url = RouteService.getWikipediaLink ( bandName );
                $window.open ( url, '_blank' );
            };
        }
    };

} ] );