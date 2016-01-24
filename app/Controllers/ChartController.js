app.controller("LineCtrl", ['$scope', '$timeout', 'Data', function ($scope, $timeout, Data) {

  $scope.labels = Data.getLineLabels();
  $scope.series = Data.getSectorsNames().then(function(names){
    $scope.labels = JSON.parse("["+names+"]");
  }, function(msg){
    alert(msg);
  }),
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [87, 95, 65, 25, 41, 45, 65],
    [5, 23, 56, 55, 30, 60, 10],
    [28, 48, 40, 19, 86, 27, 90]
  ];

}])
.controller("DoughnutCtrl", function ($scope, Data) {
  $scope.labels = Data.getSectorsNames().then(function(names){
    $scope.labels = JSON.parse("["+names+"]");
  }, function(msg){
    alert(msg);
  }),
  // $scope.labels = ["Édition", "Télécommunications", "Programmation, conseil et autres activités informatiques", "Services d'information"]
  $scope.data = Data.getData();
})
.controller("PolarAreaCtrl", function ($scope, Data) {
  $scope.labels = Data.getSectorsNames().then(function(names){
    $scope.labels = JSON.parse("["+names+"]");
  }, function(msg){
    alert(msg);
  });
  $scope.data = Data.getData();
})
.controller("BarCtrl", function ($scope, Data) {
  $scope.labels = Data.getLineLabels();
  $scope.series = Data.getSectorsNames().then(function(names){
    $scope.labels = JSON.parse("["+names+"]");
  }, function(msg){
    alert(msg);
  }),

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [87, 95, 65, 25, 41, 45, 65],
    [5, 23, 56, 55, 30, 60, 10],
    [28, 48, 40, 19, 86, 27, 90]
  ];
});
