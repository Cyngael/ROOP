define(["jquery"],function ($) {
	
	var popupsParams = {
		introPopupParams : {
			x		: 25,
			y		: 25,
			width	: 30,
			height	: 30,
			img		: "IntroPopUp.png",
			id		: "introPopup",
			buttons : {
				close : {
					className : "close",
					x		: 95,
					y		: 75,
					width	: 15,
					height	: 10,
					img		: "",
					txt 	: "",
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
					id		: "randomPopup1",
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
					confirmPopup : {
						x		: 0,
						y		: 0,
						width	: 20,
						height	: 10,
						img		: "classic_windows/normalwindow1.png",
						id		: "confirmPopup1",
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
					}
				}
				,
				{
					x		: 7,
					y		: 12,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow2.png",
					id		: "randomPopup2",
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
					x		: 5,
					y		: 8,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow3.png",
					id		: "randomPopup3",
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
					x		: 20,
					y		: 25,
					width	: 50,
					height	: 50,
					img		: "pop-ups/fakebook.png",
					id		: "randomPopup4",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 95,
							width	: 5,
							height	: 3,
							img		: "",
							txt 	: "",
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
					img		: "mail/urgent_mail.png",
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
						,
						others : [{
							className	: "sendMail",
							x		: 103,
							y		: 0,
							width	: 5,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					},
					selectList : {
						x : 4,
						y : 0,
						width : 100,
						height : 6,
						elements : [
							"c.verimportent@coldmail.com",
							"karl.neighbour@youpi.org",
							"plegallois@thepost.fr",
							"missaboss.notagungan@underwater.na"
						],
						answer : "c.verimportent@coldmail.com",
						callback : function(){},
					}
				},
				{
					x		: 25,
					y		: 10,
					width	: 80,
					height	: 80,
					img		: "mail/urgent_mail2.png",
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
							callback: function() {}						
						},
						others : [{
							className	: "sendMail",
							x		: 103,
							y		: 0,
							width	: 5,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					},
					selectList : {
						x : 4,
						y : 0,
						width : 100,
						height : 6,
						elements : [
							"c.verimportent@coldmail.com",
							"karl.neighbour@youpi.org",
							"plegallois@thepost.fr",
							"missaboss.notagungan@underwater.na"
						],
						answer : "missaboss.notagungan@underwater.na",
						callback : function(){},
					}
				},

			]
		}
		
	}

	return popupsParams;
    
});