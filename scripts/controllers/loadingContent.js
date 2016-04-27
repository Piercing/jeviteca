angular
    .module ( "jevitecaApp" )
    .controller ( "LoadingIndicatorController", [ '$scope', '$http', function ( $scope, $http ) {
        $scope.loadingContent = function () {
            return $http.pendingRequests.length > 0;
        };
    } ] );