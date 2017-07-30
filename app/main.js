define(["jquery", "BasePopup", "MailPopup", "DoomPopup", "SteamPopup", "SkypePopup", "GameEngine", "PopupPool", "popupsParams"],function ($, BasePopup, MailPopup, DoomPopup, SteamPopup, SkypePopup, GameEngine, PopupPool, popupsParams) {

	
	var GE = new GameEngine();

	var introPopup = new BasePopup(popupsParams.introPopupParams);
	var outroPopup = new BasePopup(popupsParams.outroPopupParams);

	var allPopupsContainer = {
		documents : [],
		simples : [],
		mails : [],
		doom : [],
		steam : [],
		skype : []
	};
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.documents.length; i++) {
		allPopupsContainer.documents[i] = new BasePopup(popupsParams.otherPotentialPopupsParams.documents[i]);
	}
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.simples.length; i++) {
		allPopupsContainer.simples[i] = new BasePopup(popupsParams.otherPotentialPopupsParams.simples[i]);
	}
	for (var i = 0; i < popupsParams.otherPotentialPopupsParams.mails.length; i++) {
		allPopupsContainer.mails[i] = new MailPopup(popupsParams.otherPotentialPopupsParams.mails[i]);
	}

	let doomPopup = new DoomPopup(popupsParams.otherPotentialPopupsParams.doom);
	popupsParams.otherPotentialPopupsParams.steam.doomPopup = doomPopup;
	let steamPopup = new SteamPopup(popupsParams.otherPotentialPopupsParams.steam);
	allPopupsContainer.doom.push(doomPopup);
	allPopupsContainer.steam.push(steamPopup);
	

	let skypePopup = new SkypePopup(popupsParams.otherPotentialPopupsParams.skype);
	allPopupsContainer.skype.push(skypePopup);


	var allPopupPoolsContainer = {};

	allPopupPoolsContainer.documents = new PopupPool(allPopupsContainer.documents);
	allPopupPoolsContainer.simples = new PopupPool(allPopupsContainer.simples);
	allPopupPoolsContainer.mails = new PopupPool(allPopupsContainer.mails);
	allPopupPoolsContainer.doom = new PopupPool(allPopupsContainer.doom);
	allPopupPoolsContainer.steam = new PopupPool(allPopupsContainer.steam);
	allPopupPoolsContainer.skype = new PopupPool(allPopupsContainer.skype);


	var masterPopupPools = new PopupPool([allPopupPoolsContainer.documents, allPopupPoolsContainer.simples, allPopupPoolsContainer.mails,  allPopupPoolsContainer.doom ,allPopupPoolsContainer.steam, allPopupPoolsContainer.skype]);





	var GEparams = {
		introPopup : introPopup,
		outroPopup : outroPopup,
		masterPopupPool  : masterPopupPools,
		allPopupsContainer : allPopupsContainer,
		allPopupPoolsContainer : allPopupPoolsContainer,
	};
	GE.init(GEparams);
	introPopup.setButtonCallback("close", GE.start.bind(GE));

});