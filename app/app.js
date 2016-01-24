var app = angular.module("dataApp", ['ngMaterial', 'chart.js']);
app.factory('Data', function($http, $q){
  var factory = {
    sectors: {
      "current":""
    },

    filters: [
      {
        filter:"Chiffre d'affaire / Effectif salarié",
        checked:false
      }
    ],

    sector: "",


    data: [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ],

    years: [
      {
        year:2012,
        checked:false
      },
      {
        year:2013,
        checked:false
      },
      {
        year:2014,
        checked:false
      }
    ],

    lineData: [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ],

    data: [300, 500, 100, 200],

    lineLabels: [2012, 2013, 2014],

    getNames: function(){
      return factory.names;
    },

     getSectors: function(){
       var deferred = $q.defer();
       $http.get('http://datawarehouse-api.dev/api/secteurs')
         .success(function(data, status, headers){
           factory.sectors = data;
           deferred.resolve(factory.sectors);
         })
         .error(function(data, status, headers){
           deferred.reject('Error getting sectors.');
         })
       return deferred.promise;
     },

     getSectorsNames: function(){
       var deferred = $q.defer();
       $http.get('http://datawarehouse-api.dev/api/secteurs')
         .success(function(data, status, headers){
           factory.sectorsNames = [];
           for (var sector in factory.sectors) {
             if (sector == 0) {
               factory.sectorsNames += "\""+factory.sectors[sector].name+"\"";

             } else if(sector == (factory.sectors.length-1)) {
               factory.sectorsNames += ", \""+factory.sectors[sector].name+"\"";
             } else {
               factory.sectorsNames += ", \""+factory.sectors[sector].name+"\"";
             }
           }
           deferred.resolve(factory.sectorsNames);
         })
         .error(function(data, status, headers){
           deferred.reject('Error getting sectors.');
         })
       return deferred.promise;
     },

     getSector: function(id){
       return factory.sector[id];
     },

     getFilters: function(){
       return factory.filters;
     },

     getYears: function(){
       return factory.years;
     },

     getLineData: function(){
       return factory.lineData;
     },

     setLineData: function(data){
       factory.lineData = data;
     },

     getData: function(){
       return factory.data;
     },

     setDoughnutData: function(data){
       factory.doughnutData = data;
     },

     getLineLabels: function(){
       return factory.lineLabels;
     },

     setLineLabels: function(data){
       factory.lineLabels = data;
     }
  };

  return factory;
})
