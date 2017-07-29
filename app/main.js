define(["jquery", "basePopup"],function ($, basePopup) {

	
	var params = {
		x		: 25,
		y		: 10,
		width	: 150,
		height	: 50,
		img		: "",
		id		: "test",
		buttons : {
			close : {
				class	: "close",
				x		: 25,
				y		: 50,
				width	: 50,
				height	: 10,
				img		: "",
				txt 	: "close"
			}
		}
	};

	var testPopup = new basePopup(params);
    
});