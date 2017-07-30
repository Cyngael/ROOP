define(["jquery", "TaskBar", "Utils"],function ($, TaskBar, Utils) {
	
	class GameEngine {

		constructor(params) {
			if(params)
			{
				this.outroPopup = params.outroPopup;
				this.introPopup = params.introPopup;
				this.masterPopupPool = params.masterPopupPool;
				this.allPopupPoolsContainer = params.allPopupPoolsContainer;

				this.introPopup.open();
			}
		}

		init(params) {
			this.outroPopup = params.outroPopup;
			this.introPopup = params.introPopup;
			this.masterPopupPool = params.masterPopupPool;
			this.allPopupPoolsContainer = params.allPopupPoolsContainer;
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

			this.timer = null;
			this.masterPopupPool.closeAll();
			this.taskBar.close();
			this.hardCleanPopup();

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