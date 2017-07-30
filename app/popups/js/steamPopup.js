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
				console.log("1")
				var errorPopup = new BasePopup(this.errorPopupParams);
				errorPopup.open();

				setTimeout(function(errorPopup){ errorPopup.bringToFront() },null ,errorPopup);
			}
			else
			{
				console.log("2")

				super.close();
			}
		}

	}

	return SteamPopup;
    
});