myApp.controller('brandCtrl', function($scope,$http){
    var currIndex = 0;
    $scope.myInterval = 5000;
    var promoUrl='/api/promotion/';
    $http.get(promoUrl).then(function(result){
        $scope.slides=result.data;
        for (i = 0; i < $scope.slides.length; i++) {
            $scope.slides[i].slideid=currIndex++;
        }
        console.log($scope.slides)
    });

});
