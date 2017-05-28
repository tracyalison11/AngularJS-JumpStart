// Option 1

// app.controller('CustomersController', function($scope) {
//     $scope.sortBy = 'name';
//     $scope.reverse = false;
//
//     $scope.customers = [
//       {name: 'Chloe', city: 'Claremont', orderTotal: '9.77564', joined: '05-17-2017'},
//       {name: 'Katie', city: 'Upland', orderTotal: '12.17564', joined: '05-17-2014'},
//       {name: "Tracy" , city: "Washington", orderTotal: '2.6', joined: '05-17-2017'},
//       {name: "Adam" , city: "Honolulu", orderTotal: '3', joined: '05-17-2017', },
//       {name: "Beverly" , city: "Pagosa", orderTotal: '103.76', joined: '05-17-2017'},
//       {name: "Joe" , city: "Missoula", orderTotal: '908.56', joined: '05-17-2017'},
//     ];
//
//     $scope.doSort = function(propName) {
//       $scope.sortBy = propName;
//       $scope.reverse = !$scope.reverse;
//     }
//
//     // OR CustomersController.$inject = [$scope];
// });

// Option 2

// angular.module('customersApp')
//   .controller('CustomersController', function($scope) {
//     $scope.sortBy = 'name';
//     $scope.reverse = false;
//
//     $scope.customers = [
//       {name: 'Chloe', city: 'Claremont', orderTotal: '9.77564', joined: '05-17-2017'},
//       {name: 'Katie', city: 'Upland', orderTotal: '12.17564', joined: '05-17-2014'},
//       {name: "Tracy" , city: "Washington", orderTotal: '2.6', joined: '05-17-2017'},
//       {name: "Adam" , city: "Honolulu", orderTotal: '3', joined: '05-17-2017', },
//       {name: "Beverly" , city: "Pagosa", orderTotal: '103.76', joined: '05-17-2017'},
//       {name: "Joe" , city: "Missoula", orderTotal: '908.56', joined: '05-17-2017'},
//     ];
//
//     $scope.doSort = function(propName) {
//       $scope.sortBy = propName;
//       $scope.reverse = !$scope.reverse;
//     }
//
//     // OR CustomersController.$inject = [$scope];
// });

// Option 3

(function() {

  var CustomersController = function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [
      {id: 1, name: 'Chloe', city: 'Claremont', orderTotal: '9.77564', joined: '05-17-2017', orders: [{ id: 1, product: 'Shoes', total: '9.77564'}]},
      {id: 2, name: 'Katie', city: 'Upland', orderTotal: '12.17564', joined: '05-17-2014', orders: [{ id: 2, product: 'Jeans', total: '12.17564'}]},
      {id: 3, name: "Tracy" , city: "Washington", orderTotal: '2.6', joined: '05-17-2017', orders: [{ id: 3, product: 'Shirts', total: '2.6'}]},
      {id: 4, name: "Adam" , city: "Honolulu", orderTotal: '3', joined: '05-17-2017', orders: [{ id: 4, product: 'Pants', total: '3'}] },
      {id: 5, name: "Beverly" , city: "Pagosa", orderTotal: '103.76', joined: '05-17-2017', orders: [{ id: 5, product: 'Clothes', total: '103.76'}]},
      {id: 6, name: "Joe" , city: "Missoula", orderTotal: '908.56', joined: '05-17-2017', orders: [{ id: 6, product: 'Ties', total: '908.56'}]},
    ];

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);

    // OR CustomersController.$inject = [$scope];
}());
