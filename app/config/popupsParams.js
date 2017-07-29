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
				/*Documents => ask for save*/
				{
					x		: 0,
					y		: 0,
					width	: 80,
					height	: 80,
					img		: "documents/TomorrowPres.png",
					id		: "randomPopupConf1",
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
						x		: 35,
						y		: 35,
						width	: 20,
						height	: 10,
						img		: "documents/TomorrowPresPopUp.png",
						id		: "confirmPopup1",
						buttons : {
							close : {
								className	: "close",
								x		: 90,
								y		: 20,
								width	: 15,
								height	: 17,
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
					x		: 15,
					y		: 10,
					width	: 80,
					height	: 80,
					img		: "documents/ProjectWhole.png",
					id		: "randomPopupConf1",
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
						x		: 35,
						y		: 35,
						width	: 20,
						height	: 10,
						img		: "documents/ProjectWholePopUp.png",
						id		: "confirmPopup1",
						buttons : {
							close : {
								className	: "close",
								x		: 90,
								y		: 20,
								width	: 15,
								height	: 17,
								img		: "",
								txt 	: "",
								callback: function() {
								}
							}
						},
					}
				}
				,
				/*web pages => close quickly, high number*/
				{
					x		: 7,
					y		: 12,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow2.png",
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
					}
				}
				,
				{
					x		: 7,
					y		: 12,
					width	: 80,
					height	: 80,
					img		: "classic_windows/normalwindow1.png",
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
				/*pop-ups => other kind of web pages, smaller*/
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
			/*mails => must choose the destinary and send to close correctly*/
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
			,
			doom : {
				x		: 25,
				y		: 10,
				width	: 80,
				height	: 80,
				img		: "game/doom_base.png",
				id		: "doom",
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
				},
				imgStates : [
					"game/doom_base.png",
					"game/doom_load.png",
					"game/doom_option.png",
					"game/doom_read.png",
					"game/doom_quit.png",
				]
			}
		}
		
	}

	return popupsParams;
    
});