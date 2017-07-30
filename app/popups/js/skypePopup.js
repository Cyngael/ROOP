define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class SkypePopup extends BasePopup {

		constructor(params) {
			super(params);
			this.callPopupParams = params.callPopup;
			this.callPopup = new BasePopup(this.callPopupParams);
		}

		open() {
			super.open();


			// this.domInput = document.createElement("input");
			
			// this.domInput.style.position 			= "absolute";
			// this.domInput.style.top 				= this.selectList.x + "%";
			// this.domInput.style.left 				= this.selectList.y + "%";
			// this.domInput.style.width				= this.selectList.width + "%";
			// this.domInput.style.height 				= this.selectList.height + "%";

			// this.domElement.append(this.domInput);

			this.setButtonCallback("close", this.hideAndTimer.bind(this))
		}

		hideAndTimer() {
			super.hide();

			var that = this;
			that.isGFWaiting = true;
			setTimeout(function(){
				that.callPopup.open();
				that.callPopup.bringToFront(null, "999999999999999999999");

				that.callPopup.domElement.onclick = function(){};

				that.callPopup.setButtonCallback("openChat", function(){
					that.show();
					that.callPopup.close();
				})
				that.callPopup.setButtonCallback("close", function(){
					that.callPopup.hide();
					setTimeout(function(){
						that.callPopup.show();
						that.callPopup.bringToFront(null, "999999999999999999999");
					}, that.callPopupParams.timer )
					
				})

			}, this.callPopupParams.timer);
		}

		close() {
			if(!this.isGFWaiting)
				super.close();
		}



	}

	return SkypePopup;
    
});