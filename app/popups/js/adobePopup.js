define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class AdobePopup extends BasePopup {

		constructor(params, GE) {
			super(params);

			this.timeWin = params.timeWin;
			this.GE = GE;
		}

		close() {
			this.openSavePopup();
		}

		openSavePopup() {
			this.disabled = true;
			this.savePopup = new BasePopup(this.savePopupParams);
			this.savePopup.open();


			this.fragmentationsNumber = 10;
			this.waitingCompletionStep = 0;

			var that = this;
			this.timer = setInterval(function(){
				that.waitingCompletionStep ++;

				that.savePopup.setImg(that.savePopupParams.steps[that.waitingCompletionStep]);


				if(that.waitingCompletionStep >= that.fragmentationsNumber)
				{
					clearInterval(that.timer);
					that.GE.adobeClosed(that.timeWin);
					that._doClose();
				}

			}, (this.savePopupParams.timer * 1000) / this.fragmentationsNumber);
		}

		_doClose() {

			this.savePopup.close();
			super.close();
		}

		bringToFront() {
			super.bringToFront();
			if(this.savePopup)
				this.savePopup.bringToFront();
		}

	}


	
	return AdobePopup;
    
});