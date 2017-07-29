define(["jquery", "BasePopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, GameEngine, PopupPool, popupsParams) {

	
	var GE = new GameEngine();

	var introPopup = new BasePopup(popupsParams.introPopupParams);

	var listInitialPopup = [];
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.simples.length; i++) {
		listInitialPopup[i] = new BasePopup(popupsParams.otherPotentialPopupsParams.simples[i]);
	}
	var initialPopupPool = new PopupPool(listInitialPopup);
	// initialPopupPool.randomizePositions();
	// initialPopupPool.randomizeSizes();



	var GEparams = {
		introPopup : introPopup,
		popupPool  : initialPopupPool,
	};
	GE.init(GEparams);
	introPopup.setButtonCallback("close", GE.start.bind(GE));

});