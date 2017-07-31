define(["jquery", "BasePopup", "popupsParams"],function ($, BasePopup, popupsParams) {
	
	class TaskBar {

		constructor(params, GE) {
			
			this.buttonsParams = params;
			this.enable = false;
			this.GE = GE;
			this.powerPlanPopup = new BasePopup(popupsParams.powerPlanPopupParams);

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
			this.domElement.style.width 			= "1500px";
			this.domElement.style.height 			= "32px";
			this.domElement.style.backgroundImage 	= "url(app/img/UI/taskbar.png)";
			this.domElement.style.backgroundSize 	= "1500px 32px";
			this.domElement.style.position 			= "absolute";
			this.domElement.style.top				= "812px";
			this.domElement.style.left				= "0";
			this.domElement.style.display			= "flex";
			this.domElement.style.flexDirection		= "row";
			this.domElement.style.zIndex			= "999999";

			$("#innerWindow").append(this.domElement);

			this.renderButtons();
		}

		renderButtons() {

			let domButton = document.createElement("div");
			domButton.style.height = "70%";
			domButton.style.width = "2%";
			domButton.style.margin = "5px";
			domButton.style.cursor = "pointer";

			this.domElement.append(domButton);

			for (var i = 0; i < this.buttonsParams.length; i++) {
				
 				let domButton = document.createElement("img");
 				domButton.style.height = "100%";
 				domButton.style.width = "3%";
 				domButton.style.cursor = "pointer";
				domButton.src = this.buttonsParams[i].img;
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
				that.powerPlanPopup.open();
				that.powerPlanPopup.setButtonCallback("riskPowerPlan", function(){
					that.GE.setPowerPlanRisk(true);
					that.powerPlanPopup.setImg(popupsParams.powerPlanPopupParams.imgRisk);
					that.powerPlanPopup.hide();
				});
				that.powerPlanPopup.setButtonCallback("normalPowerPlan", function(){
					that.GE.setPowerPlanRisk(false);
					that.powerPlanPopup.setImg(popupsParams.powerPlanPopupParams.img);
					that.powerPlanPopup.hide();
				});
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