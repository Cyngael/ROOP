define(["jquery", "BasePopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, GameEngine, PopupPool, popupsParams) {

	
	
	var introPopup = new BasePopup(popupsParams.introPopupParams);






	var listPopup = [];
	for (var i = 0; i < 5; i++) {
		listPopup[i] = new BasePopup(popupsParams.otherPotentialPopupsParams[0]);
	}
	var initialPopupPool = new PopupPool(listPopup);
	initialPopupPool.randomizePositions();
	initialPopupPool.randomizeSizes();



	var GEparams = {
		introPopup : introPopup,
		popupPool  : initialPopupPool,
	};
	var GE = new GameEngine(GEparams);
    
});