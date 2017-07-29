define(["jquery"],function ($) {
	
	class GameEngine {

		constructor(params) {
			if(params)
			{
				this.introPopup = params.introPopup;
				this.popupPool = params.popupPool;

				this.introPopup.open();
			}
		}

		init(params) {
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