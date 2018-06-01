//abcnew
app.controller('abcnewsCtrl', function($scope, $http) {
		$scope.$on('$viewContentLoaded', function () {
		$scope.abcnews();
		
	})

		$scope.abcnews=function(){

    $http.get("https://newsapi.org/v2/everything?sources=abc-news&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.abcnewslist = response.data.articles;
          console.log($scope.abcnewslist);
      });
}
});

