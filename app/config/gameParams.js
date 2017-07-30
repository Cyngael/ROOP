define(["jquery"],function ($) {
	
	var gameParams = {
		startTime : 120,//Second
		powerPlan : {
			opacity : 0.85,
			transitionTime : 1000,//miliSecond
			timeRatio : 0.5,//[0-1], 0 = Freeze Timer, 1 = normalSpeed
		},
		points : {
			startingPoints : 6000,
			pointsBySecond : -100,
			pointsForGFHappy : 1500,
			pointsForMails : [1000,500,0],
			pointsByDoc : 200,
			pointsByAdobe : 200,
		},
	}

	return gameParams ;
});