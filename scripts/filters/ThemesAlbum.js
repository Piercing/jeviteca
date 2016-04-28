angular
    .module( 'jevitecaApp' )
    .filter( 'trackList', function () {
        return function ( list ) {
            return 'Temas:' + list.join( ', ' );
        };
    } );