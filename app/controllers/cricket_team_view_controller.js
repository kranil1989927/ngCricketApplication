(function(){
	cricketApp.controller('CricketTeamViewController', ['$scope','$routeParams', 'teamProvider', function($scope, $routeParams, teamProvider){
		$scope.load_error_text = "";
		$scope.team_detail = $routeParams.team_name;

		try{
			var team = teamProvider.getPlayersByTeam($scope.team_detail);
			$scope.players = team.players;
		} catch(e){
			$scope.load_error_text ="Couldn't find the players in the select team";
		}
	}]);
})();