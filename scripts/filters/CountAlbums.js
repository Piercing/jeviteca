angular.module( "jevitecaApp" ).filter( "countAlbums", function () {
    return function ( data ) {
        return data.length;
    };
} );