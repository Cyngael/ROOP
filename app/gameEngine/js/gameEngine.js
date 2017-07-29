define(["jquery", "TaskBar"],function ($, TaskBar) {
	
	class GameEngine {

		constructor(params) {
			if(params)
			{
				this.introPopup = params.introPopup;
				this.masterPopupPool = params.masterPopupPool;
				this.allPopupPoolsContainer = params.allPopupPoolsContainer;

				this.introPopup.open();
			}
		}

		init(params) {
			this.introPopup = params.introPopup;
			this.masterPopupPool = params.masterPopupPool;
			this.allPopupPoolsContainer = params.allPopupPoolsContainer;

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
					txt : "Games",
					callback : function(){
						that.allPopupPoolsContainer.games.openAll();						
					}
				}
			]);

			//this.masterPopupPool.openAll();
		}

	}

	return GameEngine;
    
});