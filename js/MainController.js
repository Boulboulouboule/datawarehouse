app.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.sectors = {}

  $scope.filter = "";

  $scope.sector = "";

  $scope.dataUrl = "/secteurs";

  $scope.getSector = function($sectorId){
    $http.get('http://datawarehouse-api.dev/api/secteurs/'+$sectorId)
      .success(function(data, status, headers){
        $scope.sectors[$sectorId] = data;
        console.log(data);
        console.log($scope.data['sectors']);
      })
      .error(function(data, status, headers){
        console.log("Error");
      })
  }

  $scope.getSectors = function(){
    $http.get('http://datawarehouse-api.dev/api'+$scope.dataUrl)
      .success(function(data, status, headers){
        $scope.sectors = data;
      })
      .error(function(data, status, headers){
        console.log("Error getting sectors");
      })
  }

  $scope.clearSectors = function(){
    $scope.sectors = {};
  }


  $scope.setSector = function(sectorId){
    $scope.dataUrl = "/"+sectorId;
  }

  $scope.setFilter = function(filterId){
    $scope.filter = "/critere/"+filterId;
  }

  $scope.setYear = function(year){
    $scope.year = "/"+year;
  }

  $scope.getData = function(){
    $http.get('http://datawarehouse-api.dev/api'+$scope.sector+$scope.filter+$scope.year)
      .success(function(data, status, headers){
        $scope.data = data;
      })
      .error(function(data, status, headers){
        console.log("Error getting data");
      })
  }
}]);
