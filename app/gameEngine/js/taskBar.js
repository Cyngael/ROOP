define(["jquery"],function ($) {
	
	class TaskBar {

		constructor(params, GE) {
			
			this.buttonsParams = params;
			this.enable = false;
			this.GE = GE;
			this.render();
		}

		enable(disable) {
			this.enable = !disable;
		}

		
		render() {
			
			if($("#taskBar"))
				$("#taskBar").remove();

			this.domElement 						= document.createElement('div');
			this.domElement.id 						= "taskBar";
			this.domElement.style.width 			= "100%";
			this.domElement.style.height 			= "5%";
			this.domElement.style.backgroundImage 	= "url(app/img/UI/taskbar.png)";
			this.domElement.style.position 			= "absolute";
			this.domElement.style.bottom			= "0";
			this.domElement.style.left				= "0";
			this.domElement.style.display			= "flex";
			this.domElement.style.flexDirection		= "row";
			this.domElement.style.zIndex			= "9999999999999999999999999999999999";

			$("body").append(this.domElement);

			this.renderButtons();
		}

		renderButtons() {

			let domButton = document.createElement("div");
			domButton.style.height = "70%";
			domButton.style.width = "2%";
			domButton.style.margin = "5px";
			domButton.style.cursor = "pointer";
			domButton.style.border = "1px solid red";

			this.domElement.append(domButton);

			for (var i = 0; i < this.buttonsParams.length; i++) {
				
 				let domButton = document.createElement("div");
 				domButton.style.height = "70%";
 				domButton.style.width = "5%";
 				domButton.style.margin = "5px";
 				domButton.style.cursor = "pointer";
 				domButton.style.border = "1px solid red";
				domButton.innerHTML = this.buttonsParams[i].txt;
				domButton.onclick = this.buttonsParams[i].callback;

				this.domElement.append(domButton);
			}

			this.domBatterie = document.createElement("div");
			this.domBatterie.style.position = "absolute";
			this.domBatterie.style.height = "70%";
			this.domBatterie.style.width = "2%";
			this.domBatterie.style.margin = "5px";
			this.domBatterie.style.cursor = "pointer";
			this.domBatterie.style.left	  = "90%";
			this.domBatterie.style.border = "1px solid red";

			var that = this;
			this.domBatterie.onclick = function(){
				that.GE.endGame(false);
			};

			this.domBatterie.title = "";

			this.domElement.append(this.domBatterie);
		}

		updateTimer(string) {
			this.domBatterie.title = "Time remaining before shutdown : " + string;
		}

		close() {
			if($("#taskBar"))
				$("#taskBar").remove();
		}

	}

	return TaskBar;
    
});