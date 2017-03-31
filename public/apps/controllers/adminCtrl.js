myApp.controller('adminCtrl', function($scope,$http){


}).controller('brandManagementCtrl', function($scope,Upload){
    $scope.saveBrand=function(isValid) {
        console.log($scope.brandlogo);
        if (isValid) {
            Upload.upload({
                url: '/api/brand/',
                data: {'brandlogo': $scope.brandlogo, 'name': $scope.brandname,'description':$scope.description}
            }).then(function (resp) {
                // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                //console.log('Error status: ' + resp.status);
            }, function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        }
    }
}).controller('productManagementCtrl', function($scope,$http){
    $scope.variantinputs = [{'key':"",value:""}];
    $scope.addvariantfield=function(){
        $scope.variantinputs.push({'key':"",value:""})
    };
    $scope.removeChoice = function() {
        var lastItem = $scope.variantinputs.length-1;
        $scope.variantinputs.splice(lastItem);
    };
    $scope.saveProduct=function(isValid) {
        if (isValid) {
            $http.post('/api/product/', {}).then(function (result) {

            });
        }
    }
}).controller('categoryManagementCtrl', function($scope,$http){
    $scope.saveCategory=function(isValid) {
        if (isValid) {
            $http.post('/api/category/', {}).then(function (result) {

            });
        }
    }
});
