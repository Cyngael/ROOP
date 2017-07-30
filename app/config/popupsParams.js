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
							},
							confirmPopup : {
								x		: 35,
								y		: 35,
								width	: 20,
								height	: 10,
								img		: "documents/TomorrowPresPopUp.png",
								id		: "confirmPopup1",
								linked  : true,
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
					},
				}
				,
				{
					x		: 0,
					y		: 0,
					width	: 80,
					height	: 80,
					img		: "documents/EmptyDoc.png",
					id		: "randomPopupConf2",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 2,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 35,
								y		: 35,
								width	: 20,
								height	: 10,
								img		: "documents/EmptyDocPopup1.png",
								id		: "confirmPopup2",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 90,
										y		: 20,
										width	: 15,
										height	: 17,
										img		: "",
										txt 	: "",
										callback: function() {},
										confirmPopup : {
											x		: 15,
											y		: 20,
											width	: 20,
											height	: 10,
											img		: "documents/EmptyDocPopup2.png",
											id		: "confirmPopup21",
											linked  : true,
											buttons : {
												close : {
													className	: "close",
													x		: 90,
													y		: 20,
													width	: 15,
													height	: 17,
													img		: "",
													txt 	: "",
													callback: function() {},
													confirmPopup : {
													x		: 72,
													y		: 60,
													width	: 20,
													height	: 10,
													img		: "documents/EmptyDocPopup3.png",
													id		: "confirmPopup211",
													linked  : true,
													buttons : {
														close : {
															className	: "close",
															x		: 90,
															y		: 20,
															width	: 15,
															height	: 17,
															img		: "",
															txt 	: "",
															callback: function() {},
															confirmPopup : {
																x		: 42,
																y		: 38,
																width	: 20,
																height	: 10,
																img		: "documents/EmptyDocPopup4.png",
																id		: "confirmPopup2111",
																linked  : true,
																buttons : {
																	close : {
																		className	: "close",
																		x		: 90,
																		y		: 20,
																		width	: 15,
																		height	: 17,
																		img		: "",
																		txt 	: "",
																		callback: function() {},
																	}
																},
																}
															}
														}
													},
												},
											},
										}
									}
								},
							}
						}
					},
				}
				,
				{
					x		: 15,
					y		: 10,
					width	: 80,
					height	: 80,
					img		: "documents/ProjectWhole.png",
					id		: "randomPopupConf3",
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
							},
							confirmPopup : {
								x		: 35,
								y		: 35,
								width	: 20,
								height	: 10,
								img		: "documents/ProjectWholePopUp.png",
								id		: "confirmPopup3",
								linked  : true,
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
					}
				}
				,
				/*web pages => close quickly, high number*/
				{
					x		: 7,
					y		: 12,
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
				,
				{
					x		: 5,
					y		: 8,
					width	: 80,
					height	: 80,
					img		: "classic_windows/safariwindow1.png",
					id		: "randomPopup4",
					buttons : {
						close : {
							className	: "close",
							x		: 2,
							y		: 1,
							width	: 1,
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
					id		: "randomPopup5",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 95,
							width	: 5,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
						,
						others : [{
							className	: "duplicate",
							x		: 90,
							y		: 2,
							width	: 40,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					}
				}
				,
				{
					x		: 30,
					y		: 20,
					width	: 45,
					height	: 45,
					img		: "pop-ups/AOLTitanic.png",
					id		: "randomPopupConf4",
					buttons : {
						close : {
							className	: "close",
							x		: 110,
							y		: 85,
							width	: 12,
							height	: 6,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
						,
						others : [{
							className	: "itsATrap",
							x		: 104,
							y		: 39,
							width	: 25,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 10,
								y		: 10,
								width	: 80,
								height	: 80,
								img		: "pop-ups/AOLTitanicStep2.png",
								id		: "confirmPopup4",
								linked  : false,
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
						}]
					},
				}
			]
			,
			mails : [
			/*mails => must choose the destinary and send to close correctly*/
				{
					x		: 2,
					y		: 1,
					width	: 80,
					height	: 85,
					img		: "mail/urgent_mail.png",
					id		: "mail1",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {
							}						
						}
						,
						others : [{
							className	: "sendMail",
							x		: 101,
							y		: 1,
							width	: 4,
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
							"Choose a destinary",
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
					x		: 20,
					y		: 15,
					width	: 80,
					height	: 55,
					img		: "mail/urgent_mail2.png",
					id		: "mail1",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 97,
							width	: 3,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {}						
						},
						others : [{
							className	: "sendMail",
							x		: 65,
							y		: 1,
							width	: 4,
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
							"Choose a destinary",
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
			/*games combo: doom block steam and can't be exited except by his own menu*/
			steam :  {
				x		: 2,
				y		: 2,
				width	: 10,
				height	: 90,
				img		: "game/steam.png",
				id		: "randomPopup6",
				buttons : {
					close : {
						className	: "close",
						x		: 0,
						y		: 95,
						width	: 5,
						height	: 3,
						img		: "",
						txt 	: "",
						callback: function() {}
					}
				},
				errorPopup : {
					x		: 35,
					y		: 35,
					width	: 20,
					height	: 10,
					img		: "documents/TomorrowPresPopUp.png",
					id		: "confirmPopup5",
					linked  : true,
					buttons : {
						close : {
							className	: "close",
							x		: 90,
							y		: 20,
							width	: 15,
							height	: 17,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					},
				}
			}
			,
			doom : {
				x		: 10,
				y		: 10,
				width	: 60,
				height	: 60,
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
					"game/doom_option.png",
					"game/doom_load.png",
					"game/doom_save.png",
					"game/doom_read.png",
					"game/doom_quit.png",
				]
			}
			,
			/*skype. Girlfriends are not cool when you're in a jam, are they? ;) */
			skype : {
				x		: 8,
				y		: 60,
				width	: 25,
				height	: 80,
				img		: "Skype/gf.png",
				id		: "skypePopup",
				buttons : {
					close : {
						className	: "close",
						x		: 0,
						y		: 95,
						width	: 5,
						height	: 3,
						img		: "",
						txt 	: "",
						callback: function() {}
					}
				},
				input : {
					x		: 98,
					y		: 5,
					width	: 90,
					height	: 5,
					keywords: ["bye", "sorry", "42"] 
				},
				callPopup : {
					timer   : 5000,
					x		: 35,
					y		: 35,
					width	: 20,
					height	: 10,
					img		: "Skype/gfcall.png",
					id		: "skypeCallPopup",
					buttons : {
						close : {
							className	: "close",
							x		: 50,
							y		: 85,
							width	: 15,
							height	: 50,
							img		: "",
							txt 	: "",
							callback: function() {}
						},
						others : [{
							className	: "openChat",
							x		: 50,
							y		: 60,
							width	: 24,
							height	: 50,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					},
				}
			}
		}
		
	}

	return popupsParams;
    
});