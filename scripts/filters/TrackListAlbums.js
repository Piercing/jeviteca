angular
    .module( 'jevitecaApp' )
    .filter( 'trackListAlbums',
        function () {
            return function ( collection ) {
                return collection.join( ', ' );
            };
        } );