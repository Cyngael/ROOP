define(["jquery", "TaskBar", "Utils", "gameParams", "Utils"],function ($, TaskBar, Utils, gameParams, Utils) {
	
	class GameEngine {

		constructor(params) {
			if(params)
			{
				this.outroPopup = params.outroPopup;
				this.introPopup = params.introPopup;
				this.masterPopupPool = params.masterPopupPool;
				this.allPopupPoolsContainer = params.allPopupPoolsContainer;
				this.allPopupsContainer = params.allPopupsContainer;

				this.introPopup.open();
			}

			Utils.SoundUtils.playSound("StartSound.wav");
		}

		init(params) {
			this.outroPopup = params.outroPopup;
			this.introPopup = params.introPopup;
			this.masterPopupPool = params.masterPopupPool;
			this.allPopupPoolsContainer = params.allPopupPoolsContainer;
			this.allPopupsContainer = params.allPopupsContainer;
			this.secBySec = 1;
			this.timeRemaining = gameParams.startTime;//secondes	
			this.timeSaved = 0;		

			this.wall = document.createElement("div");
			this.wall.style.backgroundColor = "black";
			this.wall.style.position = "absolute";
			this.wall.style.height = "100%";
			this.wall.style.width = "100%";
			this.wall.style.opacity = "0";
			this.wall.style.zIndex	= "99999999999999999999999999999999999999999999";
			this.wall.style.pointerEvents= "none";


			$("#popupContainer").append(this.wall);

			this.introPopup.open();
		}

		
		start() {
			console.log("GE start")
			var that = this;
			this.taskBar = new TaskBar([
				{
					img : "app/img/UI/internetIcon.png",
					txt : "Internet",
					callback : function(){
						that.allPopupPoolsContainer.mails.bringToFront();						
						that.allPopupPoolsContainer.simples.bringToFront();		
					}
				},
				{
					img : "app/img/UI/documentsIcon.png",
					txt : "Folders",
					callback : function(){
						that.allPopupPoolsContainer.documents.bringToFront();						
					}
				},
				{
					img : "app/img/UI/skypeIcon.png",
					txt : "Skype",
					callback : function(){
						that.allPopupPoolsContainer.skype.bringToFront();						
					}
				},
				{
					img : "app/img/UI/adobeIcon.png",
					txt : "Adobe",
					callback : function(){
						that.allPopupPoolsContainer.adobe.bringToFront();						
					}
				},
				{
					img : "app/img/UI/foldersIcon.png",
					txt : "OpenOffice",
					callback : function(){
						that.allPopupPoolsContainer.folders.bringToFront();						
					}
				},
				{
					img : "app/img/UI/steamIcon.png",
					txt : "Steam",
					callback : function(){
						that.allPopupPoolsContainer.steam.bringToFront();						
					}
				},
				{
					img : "app/img/UI/doomIcon.png",
					txt : "Doom",
					callback : function(){
						that.allPopupPoolsContainer.doom.bringToFront();						
					}
				},
			], this);

			this.masterPopupPool.openAll();

			var that = this;
			setTimeout(function(){ that.masterPopupPool.randomizeOrder() }, null);
			this.startTimer();

		}

		startTimer() {
			this.timeRemaining = gameParams.startTime;//secondes
			this.timeTotalUsed = 0;
			var that = this;

			this.timer = setInterval(function(){
				that.timeTotalUsed += that.secBySec;
				that.timeRemaining -= that.secBySec;
				that.majTimerDisplay();
				if(that.timeRemaining <= 0)
				{
					that.endGame(true);
					return;
				}
			},1000);
		}

		adobeClosed (timeWin) {
			this.timeRemaining += timeWin;
			this.timeSaved += timeWin;		
		}

		majTimerDisplay() {
			this.taskBar.updateTimer(Utils.StringUtils.formatSecToMin(Math.round(this.timeRemaining)));
		}

		setPowerPlanRisk(on) {
			if(on)
			{
				$(this.wall).animate({ 
					opacity : gameParams.powerPlan.opacity
				},gameParams.powerPlan.transitionTime);

				this.secBySec = gameParams.powerPlan.timeRatio;
			}
			else
			{
				$(this.wall).animate({ 
					opacity : 0
				},gameParams.powerPlan.transitionTime);
				this.secBySec = 1;
			}
		}

		endGame(timeout) {
			console.log(timeout ? "timeout ! " : "End of the game, you WIN");

			var texts = {
				gfResult : "",
				mailResult : "",
			};

			//Check conditions victoire
			this.totalTimer = null;
			let score = Math.ceil(gameParams.points.startingPoints + (this.timeTotalUsed*gameParams.points.pointsBySecond));
			//SKype
			if(this.allPopupsContainer.skype[0].closed){
				let add = gameParams.points.pointsForGFHappy;
				texts.gfResult = "Wow, you made it like a boss. Your girlfriend understood you had a probleme and you will call her later on phone. +" + add + "pts";
				score += add;
			}
			else{
				let add = 0;
				texts.gfResult = "You made your girlfriend angry because she didn't understand your quick departure. You should have said some kind words. +" + add + "pts";
				score += add;
			}

			//Mails
			let tempScoreTab = gameParams.points.pointsForMails;
			let tempTextTab = [
				"Congrats! Even in this bad situation, you've well sent all your urgent mails. Boss is happy ! +"+tempScoreTab[0]+"pts * mail",
				"Big mistake. You sent the mails to the wrong persons. Now it's a mess. at least you've not lost them. +"+tempScoreTab[1]+"pts * mail",
				"Oh no! You had some important mails to send but your didn't ! Now the boss is very angry at you and you're in trouble ! +"+tempScoreTab[2]+"pts",
			]
			let failLevel = 0;
			for (var i = 0; i < this.allPopupsContainer.mails.length; i++) {
				if(!this.allPopupsContainer.mails[i].sended)
				{
					score += tempScoreTab[2];
					failLevel = 2;
				}
				else if (!this.allPopupsContainer.mails[i].goodAnswer )
				{
					score += tempScoreTab[1];
					if(failLevel < 1)
						failLevel = 1;
				}
				else
				{
					score += tempScoreTab[0];
				}
			}

			texts.mailResult = tempTextTab[failLevel];

			var nbDocClosed = 0;
			var addByDoc = gameParams.points.pointsByDoc;
			for (var i = 0; i < this.allPopupsContainer.documents.length; i++) {
				if(this.allPopupsContainer.documents[i].closed) {
					score += addByDoc;
					nbDocClosed ++;
				}
			}

			var nbAdobeClosed = 0;
			var addByAdobe = gameParams.points.pointsByAdobe;
			for (var i = 0; i < this.allPopupsContainer.adobe.length; i++) {
				if(this.allPopupsContainer.adobe[i].closed) {
					score += addByAdobe;
					nbAdobeClosed ++;
				}
			}

			score += (this.timeSaved * -gameParams.points.pointsBySecond)


			clearInterval(this.timer);
			this.masterPopupPool.closeAll();
			this.taskBar.close();
			this.hardCleanPopup();

			Utils.SoundUtils.playSound("Logoff.wav");

			this.outroPopup.majTxt("gfResult", texts.gfResult);
			this.outroPopup.majTxt("mailResult", texts.mailResult);
			this.outroPopup.majTxt("docResult", (nbDocClosed) + " * " + addByDoc + "pts and " +nbAdobeClosed + " * " + addByAdobe +"pts");
			this.outroPopup.majTxt("scoreResult", score);

			this.outroPopup.open();
		}

		hardCleanPopup() {
			document.getElementById("popupContainer").innerHTML = "";
			var id = window.setTimeout(function() {}, 0);

			while (id--) {
			    window.clearTimeout(id); // will do nothing if no timeout with id is present
			}
		}

	}

	return GameEngine;
    
});