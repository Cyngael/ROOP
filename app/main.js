define(["jquery", "BasePopup", "GameEngine", "PopupPool", "potentialPopupsParams"],function ($, BasePopup, GameEngine, PopupPool, potentialPopupsParams) {

	
	var introPopupParams = {
		x		: 25,
		y		: 10,
		width	: 150,
		height	: 50,
		img		: "normalwindow1.png",
		id		: "introPopup",
		buttons : {
			close : {
				class	: "close",
				x		: 25,
				y		: 50,
				width	: 50,
				height	: 10,
				img		: "",
				txt 	: "close",
				callback: function() {
					GE.start();
				}
			}
		}
	};
	var introPopup = new BasePopup(introPopupParams);






	var listPopup = [];
	for (var i = 0; i < 5; i++) {
		listPopup[i] = new BasePopup(potentialPopupsParams[1]);
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