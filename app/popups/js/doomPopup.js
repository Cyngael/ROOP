define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class DoomPopup extends BasePopup {

		constructor(params) {
			super(params);
			this.imgStates = params.imgStates;
			this.currentState = 0;
			this.isFocused = false;
		}

		changeState(state) {
			if(!state && state !== 0)
				state = this.currentState;

			this.img = 	this.imgStates[state];
			this.backgroundImage.src = "app/img/" + this.img;
		}

		open() {
			super.open();
			this.disabled = true;

			var that = this;
			this.domElement.tabIndex = "0";

			this.domElement.onclick = function(){
				that.bringToFront.bind(that);
				that.isFocused = true;
			}

			this.domElement.onkeydown = function(event){
				console.log('hey')
				if(!that.isFocused)
					return;

				let x = event.which || event.keyCode
				if(x == 40)//DownArrow
				{
					that.downArrowAction();
				}
				else if (x == 38)//UpArrow
				{
					that.upArrowAction();
				}
				else if (x == 13)//Enter
				{
					if(that.currentState == that.imgStates.length - 1)
					{
						that.close();
					}
				}


			}

		}

		downArrowAction() {
			this.currentState ++;
			if(this.currentState >= this.imgStates.length)
				this.currentState = 0;
			
			this.changeState();
		}

		upArrowAction() {
			this.currentState --;
			if(this.currentState < 0)
				this.currentState = this.imgStates.length - 1;

			this.changeState();
		}

	}


	
	return DoomPopup;
    
});