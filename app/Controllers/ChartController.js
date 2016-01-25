app.controller("LineCtrl", ['$scope', '$timeout', 'Data', function ($scope, $timeout, Data) {

  $scope.labels = Data.currentYears;
  $scope.series = Data.sectorsNames;
  $scope.data = Data.data;

}])
.controller("DoughnutCtrl", function ($scope, Data) {
  $scope.labels = Data.sectorsNames;
  $scope.data = JSON.parse("["+Data.data+"]");

  $scope.getData = function(){
    $scope.data = Data.getData();
  }
})
.controller("PolarAreaCtrl", function ($scope, Data) {
  $scope.labels = Data.sectorsNames;
  $scope.data = JSON.parse("["+Data.data+"]");
})
.controller("BarCtrl", function ($scope, Data) {
  $scope.labels = Data.currentYears;
  $scope.series = Data.sectorsNames;

  $scope.data = Data.data;
});
