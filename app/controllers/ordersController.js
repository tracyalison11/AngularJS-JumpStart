(function() {

  var ordersController = function($scope, $routeParams) {
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    function init() {
      for (var i=0, len=$scope.customers.length; i<len; i++) {
        if ($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

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
    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  angular.module('customersApp')
    .controller('ordersController', ordersController);

  ordersController.$inject = ['$scope', '$routeParams'];

}());
