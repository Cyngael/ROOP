define(["jquery", "BasePopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, GameEngine, PopupPool, popupsParams) {

	
	var introPopup = new BasePopup(popupsParams.introPopupParams);

	var listInitialPopup = [];
	for (var i = 0; i < 5; i++) {
		listInitialPopup[i] = new BasePopup(popupsParams.otherPotentialPopupsParams[0]);
	}
	var initialPopupPool = new PopupPool(listInitialPopup);
	initialPopupPool.randomizePositions();
	initialPopupPool.randomizeSizes();



	var GEparams = {
		introPopup : introPopup,
		popupPool  : initialPopupPool,
	};
	var GE = new GameEngine(GEparams);
    
});