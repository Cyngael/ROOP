define(["jquery"],function ($) {
	
	var potentialPopupsParams = [
		{
			x		: 25,
			y		: 10,
			width	: 150,
			height	: 50,
			img		: "",
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
		},
		{
			x		: Math.random() * 500 + 50,
			y		: Math.random() * 1000 + 50,
			width	: Math.random() * 150 + 50,
			height	: Math.random() * 50 + 50,
			img		: "",
			id		: "randomPopup",
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
					}
				}
			}
		}
	];

	return potentialPopupsParams;
    
});