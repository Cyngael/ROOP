define(["jquery", "TaskBar"],function ($, TaskBar) {
	
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
			var that = this;
			this.taskBar = new TaskBar([
				{
					txt : "ButtonTest",
					callback : function(){
						console.log("test1",this,that)
					}
				},
				{
					txt : "ButtonTest2",
					callback : function(){

					}
				},
				{
					txt : "ButtonTest3",
					callback : function(){

					}
				}
			]);

			this.popupPool.openAll();
		}

	}

	return GameEngine;
    
});