myApp.controller('homeCtrl', function($scope,$http){
    $scope.title="HomePage";
    var brandApiUrl='/api/brand/';
    $http.get(brandApiUrl).then(function(result){
        $scope.brandList=result.data;
        // console.log(result);
    });
    var newArrivalApiUrl='/api/product/newProduct';
    $http.get(newArrivalApiUrl).then(function(result){
        $scope.newArrivalList=result.data;
        console.log(result);
    })
});
