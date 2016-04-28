angular
    .module( 'jevitecaApp' )
    .directive( 'voting', [ '$compile', function ( $compile ) {

        return {
            restrict: 'AE',
            replace : true,
            scope   : {
                score: '='
            },

            link: function ( scope, element ) {

                var averageScore        = parseFloat( scope.score );
                var averageScoreRounded = Math.round( averageScore );

                var template = '<div>Valoración: ';

                for ( var f = 0; f < averageScoreRounded; f++ ) {

                    template += '<span class=\'glyphicon glyphicon-star\'></span>';
                }

                for ( var f = 0, F = 5 - averageScoreRounded; f < F; f++ ) {

                    template += '<span class=\"glyphicon glyphicon-star-empty\"></span>';

                    /*
                     template += '<h4>Votar:<select class="form-control" ng-model="saveStorage" ' +
                     'ng-change="saveStore()">' +
                     '<option value="0">0</option>' +
                     '<option value="1">1</option>' +
                     '<option value="2">2</option>' +
                     '<option value="3">3</option>' +
                     '<option value="4">4</option>' +
                     '<option value="5">5</option>' +
                     '</select></h4>';
                     */
                }

                template += '</div>';

                var newElement         = angular.element( template );
                var newElementCompiled = $compile( newElement )( scope );

                element.replaceWith( newElementCompiled );
            }
        };

    } ] );