define(["jquery", "TaskBar", "Utils"],function ($, TaskBar, Utils) {
	
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
		}

		init(params) {
			this.outroPopup = params.outroPopup;
			this.introPopup = params.introPopup;
			this.masterPopupPool = params.masterPopupPool;
			this.allPopupPoolsContainer = params.allPopupPoolsContainer;
			this.allPopupsContainer = params.allPopupsContainer;
			this.secBySec = 1;
			this.timeRemaining = 300;//secondes			

			this.introPopup.open();
		}

		
		start() {
			console.log("GE start")
			var that = this;
			this.taskBar = new TaskBar([
				{
					txt : "Simples",
					callback : function(){
						that.allPopupPoolsContainer.simples.openAll();						
					}
				},
				{
					txt : "Mails",
					callback : function(){
						that.allPopupPoolsContainer.mails.openAll();						
					}
				},
				{
					txt : "Steam",
					callback : function(){
						that.allPopupPoolsContainer.steam.openAll();						
					}
				},
				{
					txt : "Doom",
					callback : function(){
						that.allPopupPoolsContainer.doom.openAll();						
					}
				},
				{
					txt : "Skype",
					callback : function(){
						that.allPopupPoolsContainer.skype.openAll();						
					}
				},
				{
					txt : "OpenOffice",
					callback : function(){
						that.allPopupPoolsContainer.documents.openAll();						
					}
				}
			], this);

			this.masterPopupPool.openAll();
			this.startTimer();

		}

		startTimer() {
			this.timeRemaining = 300;//secondes
			var that = this;
			this.timer = setInterval(function(){
				that.timeRemaining -= that.secBySec;
				that.majTimerDisplay();
				if(that.timeRemaining <= 0)
				{
					that.endGame(true);
					return;
				}
			},1000);
		}

		majTimerDisplay() {
			this.taskBar.updateTimer(Utils.formatSecToMin(this.timeRemaining));
		}

		endGame(timeout) {
			console.log(timeout ? "timeout ! " : "End of the game, you WIN");

			var texts = {
				gfResult : "",
				mailResult : "",
			};

			//Check conditions victoire
			let score = 0;
			//SKype
			if(this.allPopupsContainer.skype[0].closed){
				texts.gfResult = "Wow, you made it like a boss. Your girldfriend understood you had a probleme and you will call her later on phone. +1000pts";
				score += 1000;
			}
			else{
				texts.gfResult = "You made your girlfriend angry because she didn't understand your quick departure. You should have said some kind words. +0pts";
				score += 0;
			}

			//Mails
			let tempTextTab = [
				"Congrats! Even in this bad situation, you've well sent all your urgent mails. Boss is happy ! +1000pts",
				"Big mistake. You sent the mails to the wrong persons. Now it's a mess. at least you've not lost them. +500pts",
				"Oh no! You had some important mails to send but your didn't ! Now the boss is very angry at you and you're in trouble ! +0pts",
			]
			let tempScoreTab = [1000,500,0];
			let failLevel = 0;
			for (var i = 0; i < this.allPopupsContainer.mails.length; i++) {
				if(!this.allPopupsContainer.mails[i].sended)
				{
					failLevel = 2;
				}
				else if (!this.allPopupsContainer.mails[i].goodAnswer )
				{
					if(failLevel < 1)
						failLevel = 1;
				}
			}

			texts.mailResult = tempTextTab[failLevel];
			score += tempScoreTab[failLevel];

			var nbDocClosed = 0;
			for (var i = 0; i < this.allPopupsContainer.documents.length; i++) {
				if(this.allPopupsContainer.documents[i].closed) {
					score += 200;
					nbDocClosed ++;
				}
			}



			this.timer = null;
			this.masterPopupPool.closeAll();
			this.taskBar.close();
			this.hardCleanPopup();


			this.outroPopup.majTxt("gfResult", texts.gfResult);
			this.outroPopup.majTxt("mailResult", texts.mailResult);
			this.outroPopup.majTxt("docResult", nbDocClosed);
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