define(["jquery"],function ($) {
	
	var popupsParams = {
		introPopupParams : {
			x		: 250,
			y		: 500,
			width	: 450,
			height	: 135,
			img		: "IntroPopUp.png",
			id		: "introPopup",
			buttons : {
				close : {
					className : "close",
					x		: 222,
					y		: 332,
					width	: 75,
					height	: 22,
					img		: "",
					txt 	: "",
					callback: function() {
						GE.start();
					}
				}
			}
		}
		,
		outroPopupParams : {
			x		: 0,
			y		: 0,
			width	: 1500,
			height	: 844,
			img		: "OutroScreen.png",
			id		: "OutroScreen",
			buttons : {
				close : {
					className : "close",
					x		: 695,
					y		: 659,
					width	: 86,
					height	: 24,
					img		: "",
					txt 	: "",
					callback: function() {
						window.location.reload();
					}
				},
				others : [{
					className	: "gfResult result",
					x		: 449,
					y		: 577,
					width	: 460,
					height	: 3,
					img		: "",
					txt 	: "gfResult",
					callback: function() {}		
				}
				,
				{
					className	: "mailResult result",
					x		: 490,
					y		: 577,
					width	: 450,
					height	: 3,
					img		: "",
					txt 	: "mailResult",
					callback: function() {}		
				},
				{
					className	: "docResult result",
					x		: 536,
					y		: 849,
					width	: 160,
					height	: 3,
					img		: "",
					txt 	: "docResult",
					callback: function() {}		
				},
				{
					className	: "scoreResult result",
					x		: 599,
					y		: 687,
					width	: 250,
					height	: 30,
					img		: "",
					txt 	: "scoreResult",
					callback: function() {}		
				}]
			}
		}
		,
		powerPlanPopupParams : {
			x		: 628,
			y		: 1205,
			width	: 300,
			height	: 103,
			img		: "UI/batteryChange.png",
			imgRisk	: "UI/batteryChanged.png",
			id		: "powerPlan",
			buttons : {
				close : {
					className : "close",
					x		: 0,
					y		: 0,
					width	: 0,
					height	: 0,
					img		: "",
					txt 	: "",
					callback: function() {}
				},
				others : [{
					className	: "normalPowerPlan",
					x		: 95,
					y		: 30,
					width	: 200,
					height	: 20,
					img		: "",
					txt 	: "",
					callback: function() {}		
				}
				,
				{
					className	: "riskPowerPlan",
					x		: 120,
					y		: 30,
					width	: 200,
					height	: 20,
					img		: "",
					txt 	: "",
					callback: function() {}		
				}]
			}
		}
		,
		shutdownPopupParams : {
			x		: 500,
			y		: 250,
			width	: 300,
			height	: 103,
			img		: "UI/batteryChange.png",
			imgRisk	: "UI/batteryChanged.png",
			id		: "shutdown",
			buttons : {
				close : {
					className : "close",
					x		: 0,
					y		: 0,
					width	: 50,
					height	: 50,
					img		: "",
					txt 	: "",
					callback: function() {}
				},
				others : [{
					className	: "shutdownButton",
					x		: 54,
					y		: 10,
					width	: 65,
					height	: 10,
					img		: "",
					txt 	: "",
					callback: function() {}		
				}]
			}
		}
		,
		otherPotentialPopupsParams : {
			folders : [
			/*desktop windows => just another category, with nothing important to close actually. pure spam*/
				{
					x		: 75,
					y		: 36,
					width	: 750,
					height	: 225,
					img		: "desktop_windows/desktopwindow1.png",
					id		: "randomPopup7",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 95,
							width	: 4,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
					}
				}
				,
				{
					x		: 200,
					y		: 440,
					width	: 750,
					height	: 225,
					img		: "desktop_windows/desktopwindow2.png",
					id		: "randomPopup8",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 95,
							width	: 4,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
					}
				}
				,
				{
					x		: 250,
					y		: 100,
					width	: 750,
					height	: 225,
					img		: "desktop_windows/desktopwindow3.png",
					id		: "randomPopup9",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 95,
							width	: 4,
							height	: 3,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
					}
				}
			],
			documents : [
			/*Documents => ask for save*/
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "documents/TomorrowPres.png",
					id		: "randomPopupConf1",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {
							},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "documents/TomorrowPresPopUp.png",
								id		: "confirmPopup1",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 92,
										y		: 80,
										width	: 70,
										height	: 20,
										img		: "",
										txt 	: "",
										callback: function() {
										}
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 91,
										y		: 158,
										width	: 150,
										height	: 21,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}
									,
									{
										className	: "topButton errorSound",
										x		: 10,
										y		: 324,
										width	: 45,
										height	: 18,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					},
				}
				,
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "documents/EmptyDoc.png",
					id		: "randomPopupConf2",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "documents/EmptyDocPopup1.png",
								id		: "confirmPopup2",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 92,
										y		: 80,
										width	: 70,
										height	: 20,
										img		: "",
										txt 	: "",
										callback: function() {},
										confirmPopup : {
											x		: 250,
											y		: 420,
											width	: 389,
											height	: 142,
											img		: "documents/EmptyDocPopup2.png",
											id		: "confirmPopup21",
											linked  : true,
											buttons : {
												close : {
													className	: "close",
													x		: 92,
													y		: 80,
													width	: 70,
													height	: 20,
													img		: "",
													txt 	: "",
													callback: function() {},
													confirmPopup : {
														x		: 150,
														y		: 820,
														width	: 389,
														height	: 142,
														img		: "documents/EmptyDocPopup3.png",
														id		: "confirmPopup211",
														linked  : true,
														buttons : {
															close : {
																className	: "close",
																x		: 92,
																y		: 80,
																width	: 70,
																height	: 20,
																img		: "",
																txt 	: "",
																callback: function() {},
																confirmPopup : {
																	x		: 150,
																	y		: 420,
																	width	: 389,
																	height	: 142,
																	img		: "documents/EmptyDocPopup4.png",
																	id		: "confirmPopup2111",
																	linked  : true,
																	buttons : {
																		close : {
																			className	: "close",
																			x		: 92,
																			y		: 80,
																			width	: 70,
																			height	: 20,
																			img		: "",
																			txt 	: "",
																			callback: function() {},
																		}
																		,
																		others : [{
																			className	: "bottomButtons errorSound",
																			x		: 91,
																			y		: 158,
																			width	: 150,
																			height	: 21,
																			img		: "",
																			txt 	: "",
																			callback: function() {}		
																		}
																		,
																		{
																			className	: "topButton errorSound",
																			x		: 10,
																			y		: 324,
																			width	: 45,
																			height	: 18,
																			img		: "",
																			txt 	: "",
																			callback: function() {}		
																		}]
																	},
																	}
																}
																,
																others : [{
																	className	: "bottomButtons errorSound",
																	x		: 91,
																	y		: 158,
																	width	: 150,
																	height	: 21,
																	img		: "",
																	txt 	: "",
																	callback: function() {}		
																}
																,
																{
																	className	: "topButton errorSound",
																	x		: 10,
																	y		: 324,
																	width	: 45,
																	height	: 18,
																	img		: "",
																	txt 	: "",
																	callback: function() {}		
																}]
														}
													},
												}
												,
												others : [{
													className	: "bottomButtons errorSound",
													x		: 91,
													y		: 158,
													width	: 150,
													height	: 21,
													img		: "",
													txt 	: "",
													callback: function() {}		
												}
												,
												{
													className	: "topButton errorSound",
													x		: 10,
													y		: 324,
													width	: 45,
													height	: 18,
													img		: "",
													txt 	: "",
													callback: function() {}		
												}]
											},
										}
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 91,
										y		: 158,
										width	: 150,
										height	: 21,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}
									,
									{
										className	: "topButton errorSound",
										x		: 10,
										y		: 324,
										width	: 45,
										height	: 18,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					},
				}
				,
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "documents/ProjectWhole.png",
					id		: "randomPopupConf3",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "documents/ProjectWholePopUp.png",
								id		: "confirmPopup3",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 92,
										y		: 80,
										width	: 70,
										height	: 20,
										img		: "",
										txt 	: "",
										callback: function() {}
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 91,
										y		: 158,
										width	: 150,
										height	: 21,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}
									,
									{
										className	: "topButton errorSound",
										x		: 10,
										y		: 324,
										width	: 45,
										height	: 18,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					}
				}
			],
			adobe : [
			/*Adobe applications: heavy and long to save*/
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "Adobe/Fireworks.png",
					id		: "randomPopupConf10",
					timeWin : 10,
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "Adobe/FireworksPopUp.png",
								id		: "confirmPopup10",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 142,
										y		: 57,
										width	: 94,
										height	: 26,
										img		: "",
										txt 	: "",
										callback: function() {},
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 97,
										y		: 189,
										width	: 173,
										height	: 17,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					},
					savePopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
						img		: "Adobe/savePopup01.png",
						id		: "savePopup1",
						timer  : 3,//Temps mis a sauvegarder
						steps : [
							"Adobe/savePopup01.png",
							"Adobe/savePopup02.png",
							"Adobe/savePopup03.png",
							"Adobe/savePopup05.png",
							"Adobe/savePopup08.png",
							"Adobe/savePopup10.png",
							"Adobe/savePopup13.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup15.png",
							"Adobe/savePopup15.png"
						],
						buttons : {
							close : {
								className	: "close",
										x		: 92,
										y		: 80,
										width	: 0,
										height	: 0,
								img		: "",
								txt 	: "",
								callback: function() {}
							}
						},
					}
				}
				,
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "Adobe/Flash.png",
					id		: "randomPopupConf11",
					timeWin : 10,
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "Adobe/FlashPopUp.png",
								id		: "confirmPopup11",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 95,
										y		: 94,
										width	: 81,
										height	: 20,
										img		: "",
										txt 	: "",
										callback: function() {},
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 97,
										y		: 189,
										width	: 173,
										height	: 17,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					},
					savePopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
						img		: "Adobe/savePopup01.png",
						id		: "savePopup2",
						timer  : 3,//Temps mis a sauvegarder
						steps : [
							"Adobe/savePopup01.png",
							"Adobe/savePopup01.png",
							"Adobe/savePopup01.png",
							"Adobe/savePopup01.png",
							"Adobe/savePopup04.png",
							"Adobe/savePopup05.png",
							"Adobe/savePopup06.png",
							"Adobe/savePopup06.png",
							"Adobe/savePopup13.png",
							"Adobe/savePopup15.png",
							"Adobe/savePopup15.png"
						],
						buttons : {
							close : {
								className	: "close",
										x		: 92,
										y		: 80,
										width	: 0,
										height	: 0,
								img		: "",
								txt 	: "",
								callback: function() {}
							}
						},
					}
				}
				,
				{
					x		: 0,
					y		: 0,
					width	: 1500,
					height	: 450,
					img		: "Adobe/Photoshop.png",
					id		: "randomPopupConf12",
					timeWin : 10,
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1460,
							width	: 35,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
								img		: "Adobe/PhotoshopPopUp.png",
								id		: "confirmPopup12",
								linked  : true,
								buttons : {
									close : {
										className	: "close",
										x		: 95,
										y		: 94,
										width	: 81,
										height	: 20,
										img		: "",
										txt 	: "",
										callback: function() {},
									}
									,
									others : [{
										className	: "bottomButtons errorSound",
										x		: 97,
										y		: 189,
										width	: 173,
										height	: 17,
										img		: "",
										txt 	: "",
										callback: function() {}		
									}]
								},
							}
						}
					},
					savePopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
						img		: "Adobe/savePopup01.png",
						id		: "savePopup3",
						timer  : 3,//Temps mis a sauvegarder
						steps : [
							"Adobe/savePopup01.png",
							"Adobe/savePopup05.png",
							"Adobe/savePopup06.png",
							"Adobe/savePopup08.png",
							"Adobe/savePopup11.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup14.png",
							"Adobe/savePopup15.png",
							"Adobe/savePopup15.png"
						],
						buttons : {
							close : {
								className	: "close",
										x		: 92,
										y		: 80,
										width	: 0,
										height	: 0,
								img		: "",
								txt 	: "",
								callback: function() {}
							}
						},
					}
				}
			
			],
			simples : [
				/*web pages => close quickly, high number*/
				{
					x		: 7,
					y		: 120,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow1.png",
					id		: "randomPopup1",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 100,
					y		: 1,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow2.png",
					id		: "randomPopup2",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 200,
					y		: 100,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow3.png",
					id		: "randomPopup3",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 0,
					y		: 100,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow4.png",
					id		: "randomPopup31",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 150,
					y		: 20,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow5.png",
					id		: "randomPopup32",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 250,
					y		: 50,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/normalwindow6.png",
					id		: "randomPopup33",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 1166,
							width	: 28,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				,
				{
					x		: 50,
					y		: 80,
					width	: 1200,
					height	: 360,
					img		: "classic_windows/safariwindow1.png",
					id		: "randomPopup4",
					buttons : {
						close : {
							className	: "close",
							x		: 11,
							y		: 10,
							width	: 10,
							height	: 10,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
					}
				}
				/*pop-ups => other kind of web pages, smaller, with traps (fake close buttons)*/
				,
				{
					x		: 5,
					y		: 40,
					width	: 750,
					height	: 225,
					img		: "pop-ups/fakebook.png",
					id		: "randomPopup5",
					buttons : {
						close : {
							className	: "close",
							x		: 0,
							y		: 715,
							width	: 32,
							height	: 12,
							img		: "",
							txt 	: "",
							callback: function() {}
						}
						,
						others : [{
							className	: "duplicate",
							x		: 360,
							y		: 15,
							width	: 280,
							height	: 32,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					}
				}
				,
				{
					x		: 40,
					y		: 5,
					width	: 675,
					height	: 202,
					img		: "pop-ups/AOLTitanic.png",
					id		: "randomPopupConf4",
					buttons : {
						close : {
							className	: "close",
							x		: 392,
							y		: 567,
							width	: 83,
							height	: 26,
							img		: "",
							txt 	: "",
							callback: function() {
							}
						}
						,
						others : [{
							className	: "itsATrap",
							x		: 374,
							y		: 261,
							width	: 168,
							height	: 35,
							img		: "",
							txt 	: "",
							callback: function() {},
							confirmPopup : {
								x		: 0,
								y		: 0,
								width	: 1500,
								height	: 450,
								img		: "pop-ups/AOLTitanicStep2.png",
								id		: "confirmPopup4",
								linked  : false,
								buttons : {
									close : {
										className	: "close",
										x		: 0,
										y		: 1460,
										width	: 35,
										height	: 12,
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
					x		: 120,
					y		: 1,
					width	: 1200,
					height	: 360,
					img		: "mail/urgent_mail.png",
					id		: "mail1",
					buttons : {
						close : {
							className	: "close",
							x		: 3,
							y		: 1176,
							width	: 20,
							height	: 20,
							img		: "",
							txt 	: "",
							callback: function() {
							}						
						}
						,
						others : [{
							className	: "sendMail",
							x		: 634,
							y		: 6,
							width	: 53,
							height	: 20,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					},
					selectList : {
						x : 27,
						y : 1,
						width : 1199,
						height : 32,
						elements : [
							"Choose a recipient",
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
					width	: 1200,
					height	: 248,
					img		: "mail/urgent_mail2.png",
					id		: "mail1",
					buttons : {
						close : {
							className	: "close",
							x		: 3,
							y		: 1176,
							width	: 20,
							height	: 20,
							img		: "",
							txt 	: "",
							callback: function() {}						
						},
						others : [{
							className	: "sendMail",
							x		: 411,
							y		: 6,
							width	: 53,
							height	: 20,
							img		: "",
							txt 	: "",
							callback: function() {}		
						}]
					},
					selectList : {
						x : 27,
						y : 1,
						width : 1199,
						height : 32,
						elements : [
							"Choose a recipient",
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
			/*games combo: doom blocks steam and can't be exited except by his own menu*/
			steam :  {
				x		: 0,
				y		: 0,
				width	: 1500,
				height	: 450,
				img		: "game/steam.png",
				id		: "randomPopup6",
				buttons : {
					close : {
						className	: "close",
						x		: 5,
						y		: 1470,
						width	: 20,
						height	: 15,
						img		: "",
						txt 	: "",
						callback: function() {}
					}
				},
				errorPopup : {
								x		: 350,
								y		: 420,
								width	: 389,
								height	: 142,
					img		: "game/steamPopUp.png",
					id		: "confirmPopup5",
					linked  : true,
					buttons : {
						close : {
							className	: "close",
										x		: 203,
										y		: 280,
										width	: 95,
										height	: 24,
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
				width	: 900,
				height	: 190,
				img		: "game/doom_base.png",
				id		: "doom",
				buttons : {
					close : {
						className	: "close",
						x		: 2,
						y		: 872,
						width	: 21,
						height	: 12,
						img		: "",
						txt 	: "",
						callback: function() {}						
					}
					,
					others : [{
						className	: "bottomButtons errorSound",
						x		: 0,
						y		: 0,
						width	: 420,
						height	: 260,
						img		: "",
						txt 	: "",
						callback: function() {}		
					}
					,
					{
						className	: "topButtons errorSound",
						x		: 0,
						y		: 0,
						width	: 900,
						height	: 20,
						img		: "",
						txt 	: "",
						callback: function() {}		
					}]
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
				width	: 375,
				height	: 360,
				img		: "Skype/gf.png",
				id		: "skypePopup",
				buttons : {
					close : {
						className	: "close",
						x		: 0,
						y		: 333,
						width	: 34,
						height	: 14,
						img		: "",
						txt 	: "",
						callback: function() {}
					}
				},
				input : {
					x		: 607,
					y		: 6,
					width	: 298,
					height	: 31,
					keywords: ["bye", "sorry", "must go", "out of battery", "out of power", "y aller", "désolé", "dsl", "sry", "bisous", "kiss"] 
				},
				callPopup : {
					timer   : 5000,
					x		: 350,
					y		: 550,
					width	: 421,
					height	: 116,
					img		: "Skype/gfcall.png",
					id		: "skypeCallPopup",
					buttons : {
						close : {
							className	: "close",
							x		: 63,
							y		: 368,
							width	: 42,
							height	: 40,
							img		: "",
							txt 	: "",
							callback: function() {}
						},
						others : [{
							className	: "openChat",
							x		: 63,
							y		: 259,
							width	: 95,
							height	: 40,
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