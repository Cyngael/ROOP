define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class SteamPopup extends BasePopup {

		constructor(params) {
			super(params);
			this.errorPopupParams = params.errorPopup;
			this.doomPopup = params.doomPopup;
		}

		close()
		{
			if(false)
			{
				var errorPopup = new BasePopup(this.errorPopupParams);
				errorPopup.open();

				setTimeout(function(errorPopup){ errorPopup.bringToFront() },null ,errorPopup);
			}
			else
			{
				super.close();
			}
		}

	}

	return SteamPopup;
    
});