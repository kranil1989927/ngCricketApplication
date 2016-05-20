(function(){

cricketApp.service('teamProvider', [function(){
	var teams = [
		{
			title: "Australian Cricket Team",
			name: "aus",
			country: "Australia",
			description: "This is Australian Cricket Team",
			players :[
				{
					filename : "ricky_ponting.jpg",
					name : "Ricky Ponting",
					description : "Great Australian Captain and Puller"
				},{
					filename : "brett_lee.jpg",
					name : "Brett Lee",
					description : "Fastest Bowler"
				}
			]
		}, {
			title: "Indian Cricket Team",
			name: "ind",
			country: "India",
			description: "This is Indian Cricket Team",
			players :[
				{
					filename : "sachin_tendulkar.jpg",
					name : "Sachin Tendulkar",
					description : " One of the God Gifted Player in World Cricket"
				},{
					filename : "sourav_ganguly.jpg",
					name : "Saurav Ganguly",
					description : " One of the best captain and God of off side"
				}
			]
		}, {
			title: "South Africa Cricket Team",
			name: "saf",
			country: "South Africa",
			description: "This is South Africa Cricket Team",
			players :[
				{
					filename : "sachin_tendulkar.jpg",
					name : "Sachin Tendulkar",
					description : " One of the God Gifted Player in World Cricket"
				},{
					filename : "sourav_ganguly.jpg",
					name : "Saurav Ganguly",
					description : " One of the best captain and God of off side"
				}
			]
		}, {
			title: "New Zealand Cricket Team",
			name: "nzl",
			country: "New Zealand",
			description: "This is New Zealand Cricket Team",
			players :[
				{
					filename : "sachin_tendulkar.jpg",
					name : "Sachin Tendulkar",
					description : " One of the God Gifted Player in World Cricket"
				},{
					filename : "sourav_ganguly.jpg",
					name : "Saurav Ganguly",
					description : " One of the best captain and God of off side"
				}
			]
		}
	];

	this.getTeams = function(){
		return teams;//JSON.parse(JSON.stringify(teams));
	};

	this.getPlayersByTeam = function(team_name){
		for (var i = 0; i < teams.length; i++) {
			if(team_name.toLowerCase() == teams[i].name.toLowerCase()){
				return teams[i];
			}
		}
		throw new Error("player_not_found");
	};

	this.addTeam = function(team_data){
		if(!team_data.title) throw new Error("missing_team_title");

		for (var i = 0; i < teams.length; i++) {
			if(team_data.name.toLowerCase() == teams[i].name.toLowerCase())
				throw new Error("duplicate_team");
		}

		if(!team_data.country) throw new Error("missing_team_country");
		if(!team_data.description) throw new Error("missing_team_description");
		if(!team_data.name) throw new Error("missing_team_name");

		teams.push(team_data);
	};

}]);

})();