angular
    .module( 'jevitecaApp' )
    .service( 'RouteService', [ '$http', 'configuracion', '$q', '$filter',
        function ( $http, configuracion, $q, $filter ) {

            this.getRouteUrl = function ( service ) {

                // Con el servicio $http hacemos peticiones de recursos.
                var urlPath = configuracion.routeUrl + service;

                return $http.get( urlPath );
            };

            this.getRouteImage = function ( ruta ) {

                return ruta === null ? null : configuracion.routeImage + ruta;
            };

            this.getItemById = function ( service, id ) {

                // Creamos un objeto diferido
                var deferred = $q.defer();

                // Obtenemos la colección
                this.getRouteUrl( service ).then(
                    function ( response ) {
                        // Obtenemos el elemento de la colección por su id.
                        var items = $filter( 'filter' )( response.data, { 'id': id } );
                        // Resolvemos la promesa con el elemento 0.
                        deferred.resolve( items[ 0 ] );
                    }
                );
                // Retornamos la promesa
                return deferred.promise;
            };

            this.getWikipediaLink = function ( bandName ) {
                var query = encodeURIComponent( bandName );
                return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
            };


            this.getYouTubeLink = function ( bandName, trackName ) {
                var query = encodeURIComponent( (bandName + " " + trackName).toLowerCase() );
                return "https://www.youtube.com/results?search_query=" + query;
            }
        } ] );
