angular
    .module( 'jevitecaApp' )
    .filter( 'membersBands',
        function () {
            return function ( collection ) {
                return collection.join( ', ' );
            };
        } );