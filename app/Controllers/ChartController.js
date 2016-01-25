app.controller("LineCtrl", ['$scope', '$timeout', 'Data', function ($scope, $timeout, Data) {

  $scope.labels = Data.currentYears;
  $scope.series = Data.sectorsNames;
  $scope.data = Data.getLineData();

}])
.controller("DoughnutCtrl", function ($scope, Data) {
  $scope.labels = Data.sectorsNames;
  $scope.data = Data.getData();
})
.controller("PolarAreaCtrl", function ($scope, Data) {
  $scope.labels = Data.sectorsNames;
  $scope.data = Data.getData();
})
.controller("BarCtrl", function ($scope, Data) {
  $scope.labels = Data.currentYears;
  $scope.series = Data.sectorsNames;

  $scope.data = Data.getLineData();
});
