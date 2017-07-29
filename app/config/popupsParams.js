define(["jquery"],function ($) {
	
	var popupsParams = {
		introPopupParams : {
			x		: 25,
			y		: 10,
			width	: 150,
			height	: 50,
			img		: "normalwindow1.png",
			id		: "introPopup",
			buttons : {
				close : {
					className : "close",
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
		}
		,
		otherPotentialPopupsParams : [
			{
				x		: Math.random(),
				y		: Math.random(),
				width	: Math.random(),
				height	: Math.random(),
				img		: "",
				id		: "randomPopup",
				buttons : {
					close : {
						className	: "close",
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
			,
			{
				x		: Math.random(),
				y		: Math.random(),
				width	: Math.random(),
				height	: Math.random(),
				img		: "",
				id		: "randomPopup",
				buttons : {
					close : {
						className	: "close",
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
		]
	}

	return popupsParams;
    
});