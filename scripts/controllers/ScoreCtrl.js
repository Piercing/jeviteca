angular
    .module( 'jevitecaApp' )
    .controller( 'ScoreCtrl', [ '$scope', function ( $scope ) {

        var numVotes       = 0;
        var sumVotes       = 0;
        $scope.saveStorage = '-';

        $scope.saveStore = function () {

            if ( typeof(Storage) !== 'undefined' ) {
                sumVotes += parseInt( $scope.saveStorage );
                numVotes++;
                var percentageVotes = parseFloat( sumVotes / numVotes );
                // Guardamos la puntuación media en localStorage
                localStorage.setItem( 'scoreAlbum', percentageVotes );

                //alert( "Almacenamos en localStorage la valoración media " + percentageVotes + "." )
            }
        };

        $scope.recoverStorage = function () {

            if ( typeof(Storage) !== 'undefined' ) {
                // Devolvemos la puntuación media del localStorage
                return localStorage.getItem( 'scoreAlbum' );
            }
        };
    } ] );