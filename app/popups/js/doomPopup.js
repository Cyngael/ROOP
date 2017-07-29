define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class DoomPopup extends BasePopup {

		constructor(params) {
			super(params);
			this.imgStates = params.imgStates;
			this.currentState = 0;
		}

		changeState(state) {
			this.img = 	this.imgStates[state];
			this.backgroundImage.src = "app/img/" + this.img;
		}

		open() {
			super.open();
			this.disabled = true;
		}

	}


	
	return DoomPopup;
    
});