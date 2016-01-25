app.controller('MainController', ['$scope', '$http', 'Data', function($scope, $http, Data){
  $scope.loading=true;

  $scope.sectors = Data.getSectors().then(function(sectors){
    $scope.loading=false;
    $scope.sectors = sectors;
  }, function(msg){
    alert(msg);
  });

  // $scope.data = Data.getApiData().then(function(data){
  //   $scope.loading=false;
  //   $scope.data = data;
  // }, function(msg){
  //   alert(msg);
  // });

  $scope.names = Data.getSectorsNames().then(function(names){
    $scope.names = JSON.parse("["+names+"]");
  }, function(msg){
    alert(msg);
  });

  $scope.filters = Data.getFilters();

  $scope.currentFilters = Data.currentFilters;

  $scope.years = Data.getYears();

  $scope.currentYears = Data.currentYears;

  $scope.init = function(){
    Data.getSectors();
    Data.getApiData();
  }

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

  $scope.setNames= function(sector){
    Data.setSectorsNames(sector);
    $scope.names = Data.sectorsNames;

  }

  $scope.setFilter= function(filter){
    Data.setFilter(filter);
    $scope.filters = Data.filters;

  }

  $scope.setYears= function(year){
    Data.setYears(year);
    $scope.years = Data.years;

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
