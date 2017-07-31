define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class SteamPopup extends BasePopup {

		constructor(params) {
			super(params);
			this.errorPopupParams = params.errorPopup;
			this.doomPopup = params.doomPopup;
		}

		close()
		{
			if(!this.doomPopup.closed)
			{
				this.disabled = true;
				this.errorPopup = new BasePopup(this.errorPopupParams);
				this.errorPopup.open();
				var that = this;
				this.errorPopup.setButtonCallback("close", function(){ that.disabled = false;})

				setTimeout(function(errorPopup){ errorPopup.bringToFront() },null ,this.errorPopup);
			}
			else
			{
				super.close();
			}
		}

		bringToFront() {
			super.bringToFront();
			if(this.errorPopup)
				this.errorPopup.bringToFront();
		}

	}

	return SteamPopup;
    
});