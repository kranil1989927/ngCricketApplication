(function(){
	cricketApp.controller('CricketTeamController',['$scope','teamProvider', function($scope, teamProvider){
		$scope.adding_team = {};
		$scope.add_team_error ="";
		$scope.teams = teamProvider.getTeams();
		
		$scope.addTeam = function(new_team){
			try{
				teamProvider.addTeam(new_team);
				$scope.adding_team = {};
				$scope.add_team_error ="";	
			} catch(e){
				if(e.message=="missing_team_title")
					$scope.add_team_error ="Please enter team title";
				else if(e.message=="missing_team_country")
					$scope.add_team_error ="Please enter team country";
				else if(e.message=="missing_team_description")
					$scope.add_team_error ="Please enter team description";
				else if(e.message=="missing_team_name")
					$scope.add_team_error ="Please enter team name";
				else if(e.message=="duplicate_team")
					$scope.add_team_error ="Team already exist";
			}					
		};
	}]);
})();