(function(){
	cricketApp.controller('PlayerViewController', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.team = $routeParams.team_name ;
		$scope.player_name = $routeParams.player_name;
	}]);
})();