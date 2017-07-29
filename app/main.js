define(["jquery", "BasePopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, GameEngine, PopupPool, popupsParams) {

	
	var GE = new GameEngine();

	var introPopup = new BasePopup(popupsParams.introPopupParams);

	var allPopups = {
		simples : [],
		mails : [],
	};
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.simples.length; i++) {
		allPopups.simples[i] = new BasePopup(popupsParams.otherPotentialPopupsParams.simples[i]);
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