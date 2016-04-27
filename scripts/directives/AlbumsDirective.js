angular
    .module ( 'jevitecaApp' )
    .directive ( 'albumsDirective', [ 'RouteService', function ( RouteService ) {

    return {
        restrict   :'AE',
        replace    :true,
        templateUrl:'views/AlbumsDirecitve.html',
        scope      :{
            data:'='
        }, link    :function ( scope ) {

            scope.routeImage = function ( route ) {
                return RouteService.getRouteImage ( route )
            }
        }

    };

} ] );