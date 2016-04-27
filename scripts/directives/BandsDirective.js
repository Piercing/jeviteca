angular
    .module ( 'jevitecaApp' )
    .directive ( 'bandsDirective', [ function () {

    return {
        restrict:'AE',
        replace :true,
        templateUrl:'views/BandsDirective.html',
        scope   :{
            data:'='
        },
        link    :function ( scope ) {

        }
    };

} ] );