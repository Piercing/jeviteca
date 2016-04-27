// Creación módulo 'jeviteca'
angular.module( 'jevitecaApp', [ 'ngRoute', 'route-segment', 'view-segment', 'ui.bootstrap' ] );

// Configuración del routing, mediante array en linea
angular.module( 'jevitecaApp' ).config( [ '$routeSegmentProvider', '$routeProvider',
    function ( $routeSegmentProvider, $routeProvider ) {

        /*
         ZONA DE ROUTING
         */

        // Segmentos de nivel 0
        $routeSegmentProvider.when( '/albums', 'albums' );
        $routeSegmentProvider.when( '/bands', 'bands' );
        $routeSegmentProvider.when( '/genres', 'genres' );
        $routeSegmentProvider.when( '/albums/albums_details/:id', 'albums_details' );
        $routeSegmentProvider.when( '/bands/bands_details/:id', 'bands_details' );
        $routeProvider.otherwise( {
            redirectTo: '/albums'
        } );

        /*
         Segmentos que cuelgan de las distintas pestañas o secciones
         */

        $routeSegmentProvider.segment( 'albums', {

            controller : 'AlbumsCtrl',
            templateUrl: 'views/Albums.html',
            resolve    : {
                Albums: [ 'RouteService', function ( RouteService ) {
                    return RouteService.getRouteUrl( 'albums.json' );
                } ]/*,
                 favAlbums:[
                 //TODO: código para traer los álbumes favoritas del local storage
                 ]*/
            }
        } );

        $routeSegmentProvider.segment( 'bands', {

            controller : 'BandsCtrl',
            templateUrl: 'views/Bands.html',
            resolve    : {
                Bands: [ 'RouteService', function ( RouteService ) {
                    return RouteService.getRouteUrl( 'bands.json' );
                } ]
                /*,
                 favBands:[
                 //TODO: código para traer las bandas favoritas del local storage
                 ]*/
            }
        } );

        $routeSegmentProvider.segment( 'genres', {

            controller : 'GenresCtrl',
            templateUrl: 'views/Genres.html',
            resolve    : {
                Genres: [ 'RouteService', function ( RouteService ) {
                    return RouteService.getRouteUrl( 'genres.json' );
                } ]
            }
        } );


        $routeSegmentProvider.segment( 'albums_details', {

            controller : 'AlbumsDetailsCtrl',
            templateUrl: 'views/AlbumsDetails.html',
            resolve    : {
                Album: [ 'RouteService', '$routeParams',
                    function ( RouteService, $routeParams ) {
                        return RouteService.getItemById( 'albums.json', $routeParams.id );
                    } ]
            }

        } );

        $routeSegmentProvider.segment( 'bands_details', {

            controller : 'BandsDetailsCtrl',
            templateUrl: 'views/BandsDetails.html',
            resolve    : {
                Band: [ 'RouteService', '$routeParams',
                    function ( RouteService, $routeParams ) {
                        return RouteService.getItemById( 'bands.json', $routeParams.id );
                    } ]
            }
        } );

    } ] );