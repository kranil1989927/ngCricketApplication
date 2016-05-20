var cricketApp = angular.module('cricketWikiApp', ['ngRoute']);

cricketApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when("/teams",{controller:"CricketTeamController", templateUrl:"/app/partials/team_list_partial.html" })
		.when("/teams/:team_name",{controller:"CricketTeamViewController", templateUrl:"/app/partials/team_view_partial.html" })
		.when("/teams/:team_name/photos/:player_name",{controller:"PlayerViewController", templateUrl:"/app/partials/player_view_partial.html" })
		.when("/",{redirectTo:"/teams"})
		.when("/404_page",{controller:"Controller404", templateUrl:"/app/partials/404_page_partial.html" })
		.otherwise({redirectTo:"/404_page"});
}]);