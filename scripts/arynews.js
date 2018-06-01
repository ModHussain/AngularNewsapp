app.controller('aryCtrl', function($scope, $http) {
		$scope.$on('$viewContentLoaded', function () {
		$scope.ary();
		
	})

		$scope.ary=function(){

    $http.get("https://newsapi.org/v2/everything?sources=ary-news&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.arylist = response.data.articles;
          console.log($scope.arylist);
      });
}
});