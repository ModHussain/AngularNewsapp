//ARS TEchnolo
app.controller('arcCtrl', function($scope, $http) {
		$scope.$on('$viewContentLoaded', function () {
		$scope.arc();
		
	})

		$scope.arc=function(){

    $http.get("https://newsapi.org/v2/everything?sources=ars-technica&apiKey=a65429315e8a4bd58644f190c2af875b").then(function (response) {
          $scope.arslist = response.data.articles;
          console.log($scope.arslist);
      });
}
});

//Ary News

