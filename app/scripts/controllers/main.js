'use strict';

angular.module('angularIssuesApp')
  .controller('MainCtrl', function ($scope, $http) {
      
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ':' + $scope.password);




      $scope.numberOfChecked=0;
       


  $scope.CheckedBox = function(x) {
console.log(x)
    	
  	// 	$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ':' + $scope.password);
			// $http.get('https://api.github.com/repos/nickgrosvenor/ticTacToe/issues').success(function(response) {
			// 	$scope.myIssues = response;

			// });
			
	};		     	

  
  $scope.loadIssues = function() {

    	
  		$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ':' + $scope.password);
			$http.get('https://api.github.com/repos/nickgrosvenor/ticTacToe/issues').success(function(response) {
				$scope.myIssues = response;

			});
     


      	

  };

 $scope.addIssue = function() {
console.log("test");

$http.post('https://api.github.com/repos/nickgrosvenor/ticTacToe/issues', {title: $scope.title,
		body:$scope.body}).success(function(){
			// console.log("x");

			$scope.myIssues.unshift({title: $scope.title,
		body:$scope.body})
		
	  
	  	});

 }; 


 $scope.closeIssue = function(URL) {
$scope.checkbox
$http.post(URL, {url:URL, state:"closed"}).success(function(closedissue){
			console.log(closedissue);


			
		
		
	  
	  	});

 }; 

});

