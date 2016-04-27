// Controlador para la vista de los Albums
angular
    .module ( 'jevitecaApp' )
    .controller ( 'AlbumsCtrl', [ '$scope', '$filter', 'Albums',
    function ( $scope, $filter, Albums ) {

        // Almacenamos en local la colección de albums para
        // que no se muestres todos directamente en la vista
        var albums = $filter ( 'orderBy' ) ( Albums.data, '-year' );

        // Propiedades del paginador
        $scope.pager = {

            // Cambio de página
            pageChange:function () {

                // Obtenemos el primer y último elemento de la página a mostrar.
                var firts = ($scope.pager.actualPage - 1) * $scope.pager.ItemsForPage;
                var last  = firts + $scope.pager.ItemsForPage;

                // Establecemos en la vista la página seleccionada.
                $scope.albums = albums.slice ( firts, last );
            },
            // Página actual
            actualPage:1,

            // Total de elementos -albums-
            totalItems:albums.length,

            // Tamaño página
            ItemsForPage:10
        };

        // Forzamos el cambio de página para que traiga la primera al entrar a la vista
        $scope.pager.pageChange ();
    } ] );