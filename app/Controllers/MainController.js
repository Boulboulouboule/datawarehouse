app.controller('MainController', ['$scope', '$http', 'Data', function($scope, $http, Data){
  $scope.loading=true;
  $scope.sectors = Data.getSectors().then(function(sectors){
    $scope.loading=false;
    $scope.sectors = sectors;
  }, function(msg){
    alert(msg);
  });

  $scope.sectorsNames = Data.getSectorsNames().then(function(names){
    $scope.sectorsNames = names;
  }, function(msg){
    alert(msg);
  });

  $scope.filters = Data.getFilters();

  $scope.years = Data.getYears();

  $scope.getSector = function($sectorId){
    $http.get('http://datawarehouse-api.dev/api/secteurs/'+$sectorId)
      .success(function(data, status, headers){
        $scope.sectors[current] = data;
      })
      .error(function(data, status, headers){
        console.log("Error");
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

  // $scope.getData = function(){
  //   $http.get('http://datawarehouse-api.dev/api'+$scope.sector+$scope.filter+$scope.year)
  //     .success(function(data, status, headers){
  //       $scope.data = data;
  //     })
  //     .error(function(data, status, headers){
  //       console.log("Error getting data");
  //     })
  // }
}]);
