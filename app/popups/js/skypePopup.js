define(["jquery", "BasePopup", "Utils"],function ($, BasePopup, Utils) {
	
	class SkypePopup extends BasePopup {

		constructor(params) {
			super(params);
			this.callPopupParams = params.callPopup;
			this.callPopup = new BasePopup(this.callPopupParams);
			this.inputParams = params.input;
		}

		open() {
			super.open();
			var that = this;


			this.domInput = document.createElement("input");
			this.domInput.style.position 			= "absolute";
			this.domInput.style.top 				= this.inputParams.x + "px";
			this.domInput.style.left 				= this.inputParams.y + "px";
			this.domInput.style.width				= this.inputParams.width + "px";
			this.domInput.style.height 				= this.inputParams.height + "px";
			this.domInput.placeholder = "Type your message here !";
			this.domInput.onkeyup = function(e){
				let x = e.which || e.keyCode;
				if (x == 13)//Enter
				{
					let isEnought = false;
					for (var i = 0; i < that.inputParams.keywords.length; i++) {
						if(this.value.toUpperCase().includes(that.inputParams.keywords[i].toUpperCase()))
							isEnought = true;
					}

					if(isEnought)
					{
						that.isGFWaiting = false;
						that.close();
					}
					else
					{
						this.value = "";
					}
				}

			}

			this.domElement.append(this.domInput);

			this.setButtonCallback("close", this.hideAndTimer.bind(this))
		}

		hideAndTimer() {
			super.hide();

			var that = this;
			that.isGFWaiting = true;
			this.timer = setTimeout(function(){
				that.callPopup.open();
				Utils.SoundUtils.loopSound("skype_call_inc.mp3");
				that.callPopup.bringToFront(null, "999999999999999999999");

				that.callPopup.domElement.onclick = function(){};

				that.callPopup.setButtonCallback("openChat", function(){
					that.callPopup.close();
					that.show();
					that.bringToFront();
					Utils.SoundUtils.stopSound("skype_call_inc.mp3");
				})
				that.callPopup.setButtonCallback("close", function(){
					that.callPopup.hide();
					Utils.SoundUtils.stopSound("skype_call_inc.mp3");

					setTimeout(function(){
						that.callPopup.show();
						that.callPopup.bringToFront(null, "999999999999999999999");
						Utils.SoundUtils.loopSound("skype_call_inc.mp3");

					}, that.callPopupParams.timer )
					
				})

			}, this.callPopupParams.timer);
		}

		close() {
			if(!this.isGFWaiting)
			{
				clearInterval(this.timer);
				super.close();
			}
		}



	}

	return SkypePopup;
    
});