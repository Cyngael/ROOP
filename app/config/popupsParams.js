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
						/*normalwindows*/
			{
				x		: Math.random(),
				y		: Math.random(),
				width	: Math.random(),
				height	: Math.random(),
				img		: "img/classic_windows/normalwindow1.png",
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
				img		: "img/classic_windows/normalwindow2.png",
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
				img		: "img/classic_windows/normalwindow3.png",
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
			/*pop-ups*/
			,
			{
				x		: Math.random(),
				y		: Math.random(),
				width	: Math.random(),
				height	: Math.random(),
				img		: "img/pop-ups/fakebook.png",
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