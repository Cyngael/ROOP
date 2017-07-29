define(["jquery"],function ($) {
	
	var popupsParams = {
		introPopupParams : {
			x		: 25,
			y		: 25,
			width	: 30,
			height	: 30,
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
		otherPotentialPopupsParams : {
			simples : [
				{
					x		: 0,
					y		: 0,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow1.png",
					id		: "randomPopup",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 2,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
					}
				}
				,
				{
					x		: 1,
					y		: 2,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow2.png",
					id		: "randomPopup",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 2,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
					}
				}
				,
				{
					x		: 2,
					y		: 1,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow3.png",
					id		: "randomPopup",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 2,
							img		: "",
							txt 	: "",
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
					img		: "pop-ups/fakebook.png",
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
			,
			mails : [
				{
					x		: 2,
					y		: 1,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow3.png",
					id		: "mail1",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 2,
							img		: "",
							txt 	: "",
							callback: function() {
							}						
}
					},
					selectList : {
						x : 1,
						y : 2,
						width : 100,
						height : 5,
						elements : [
							"JPP@gmal.ail",
							"yeah@youpi.com",
							"j.youplaboup@coldmail.org"
						],
						answer : "JPP@gmail.ail",
						callback : function(){},
					}
				},

			]
		}
		
	}

	return popupsParams;
    
});