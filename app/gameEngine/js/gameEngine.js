define(["jquery"],function ($) {
	
	class GameEngine {

		constructor(params) {
			this.introPopup = params.introPopup;
			this.popupPool = params.popupPool;

			this.introPopup.open();
		}

		
		start() {
			console.log("GE start")
			this.popupPool.openAll();
		}

	}

	return GameEngine;
    
});