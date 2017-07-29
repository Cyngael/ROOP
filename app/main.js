define(["jquery", "BasePopup", "MailPopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, MailPopup, GameEngine, PopupPool, popupsParams) {

	
	var GE = new GameEngine();

	var introPopup = new BasePopup(popupsParams.introPopupParams);

	var allPopupsContainer = {
		simples : [],
		mails : [],
	};
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.simples.length; i++) {
		allPopupsContainer.simples[i] = new BasePopup(popupsParams.otherPotentialPopupsParams.simples[i]);
	}
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.mails.length; i++) {
		allPopupsContainer.mails[i] = new MailPopup(popupsParams.otherPotentialPopupsParams.mails[i]);
	}

	var allPopupPoolsContainer = {};

	allPopupPoolsContainer.simples = new PopupPool(allPopupsContainer.simples);
	allPopupPoolsContainer.mails = new PopupPool(allPopupsContainer.mails);


	var masterPopupPools = new PopupPool([allPopupPoolsContainer.simples, allPopupPoolsContainer.mails]);





	var GEparams = {
		introPopup : introPopup,
		masterPopupPool  : masterPopupPools,
		allPopupPoolsContainer : allPopupPoolsContainer,
	};
	GE.init(GEparams);
	introPopup.setButtonCallback("close", GE.start.bind(GE));

});