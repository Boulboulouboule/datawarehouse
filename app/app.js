var app = angular.module("dataApp", ['ngMaterial', 'chart.js']);
app.factory('Data', function($http, $q){
  var factory = {
    sectors: [],
    sector: [],
    sectorsNames: [],
    filters: [
      {
        name:"Chiffre d'affaire / Effectif salarié",
        checked:false
      }
    ],
    currentFilters: [],
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
    currentYears: [],
    data:[
      [229,285, 325],
      [456,398, 210],
      [540,120, 230],
      [547,265, 484]
    ],
    lineLabels: [2012, 2013, 2014],

    getApiData: function(){
      var deferred = $q.defer();
      $http.get('http://datawarehouse-api.dev/api/secteurs')
        .success(function(data, status, headers){
          factory.sectors = data;
          var names = [];
          for (var sector in factory.sectors) {
            var name = factory.sectors[sector].name;
            var id = factory.sectors[sector].id;
            names.push({name});
            console.log(names);
            $http.get('http://datawarehouse-api.dev/api/secteurs/'+id+"/critere/5")
            .success(function(data, status, headers){
              console.log(names[factory.sectors[sector].name]);
              names[sector].push('bonjour');
              factory.data.push(name[data]);

            })
            .error(function(data, status, headers){
              deferred.reject('Error getting API data.');
            });
          }
        })
        .error(function(data, status, headers){
          console.log('Error getting data');
        });
      deferred.resolve(factory.data);
      return deferred.promise;
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
     console.log('ok');
    },

    //  getSectorsNames: function(){
    //    var deferred = $q.defer();
    //    if (!factory.sectorsNames) {
    //      $http.get('http://datawarehouse-api.dev/api/secteurs')
    //      .success(function(data, status, headers){
    //        factory.sectorsNames = [];
    //        for (var sector in factory.sectors) {
    //          if (sector == 0) {
    //            factory.sectorsNames += "\""+factory.sectors[sector].name+"\"";
     //
    //          } else if(sector == (factory.sectors.length-1)) {
    //            factory.sectorsNames += ", \""+factory.sectors[sector].name+"\"";
    //          } else {
    //            factory.sectorsNames += ", \""+factory.sectors[sector].name+"\"";
    //          }
    //        }
    //        deferred.resolve(factory.sectorsNames);
    //        console.log(deferred.promise);
    //      })
    //      .error(function(data, status, headers){
    //        deferred.reject('Error getting sectors.');
    //      })
    //    } else {
    //      deferred.resolve(factory.sectorsNames);
    //    }
    //    return deferred.promise;
    //  },

    getSectorsNames: function(){
      var deferred = $q.defer();
      deferred.resolve(factory.sectorsNames);
      return deferred.promise;
    },

    setSectorsNames: function(sector){
     if (sector.checked == true) {
       if (typeof factory.sectorsNames == "string") {
         var names = factory.sectorsNames.split("\",\"");
         factory.sectorsNames = names;
         console.log("String to array");
       }
       if (factory.sectorsNames.indexOf(sector.name) == -1) {
         factory.sectorsNames.push(sector.name);
         console.log('Ajouté !');

       } else {
         console.log("Élément déja présent");

       }
     } else if (sector.checked == false) {
       factory.sectorsNames.splice(factory.sectorsNames.indexOf(sector.name),1);
       console.log('Retiré !');

     }
     console.log(factory.sectorsNames);
    },

     getSector: function(id){
       return factory.sector[id];
     },

     getFilters: function(){
       return factory.filters;
     },

     setFilter: function(filter){
       if (filter.checked == true) {
         if (typeof factory.filters == "string") {
           var names = factory.filters.split("\",\"");
           factory.filters = names;
           console.log("String to array");
         }
         if (factory.currentFilters.indexOf(filter.name) == -1) {
           factory.currentFilters.push(filter.name);
           console.log('Ajouté !');

         } else {
           console.log("Élément déja présent");

         }
       } else if (filter.checked == false) {
         factory.currentFilters.splice(factory.currentFilters.indexOf(filter.name),1);
         console.log('Retiré !');

       }
       console.log(factory.currentFilters);
     },

    getYears: function(){
       return factory.years;
     },

    setYears: function(year){
      if (year.checked == true) {
        if (typeof factory.years == "string") {
          var years = factory.years.split("\",\"");
          factory.years = years;
          console.log("String to array");
        }
        if (factory.currentYears.indexOf(year.year) == -1) {
          factory.currentYears.push(year.year);
          console.log('Ajouté !');

        } else {
          console.log("Élément déja présent");

        }
      } else if (year.checked == false) {
        factory.currentYears.splice(factory.currentYears.indexOf(year.year),1);
        console.log('Retiré !');

      }
      console.log(factory.currentYears);
    },

     getLineData: function(){
       return factory.data;
     },

     setLineData: function(data){
       factory.lineData = data;
     },

     getData: function(){
       var data = JSON.parse("["+factory.data+"]")
       return data;
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
