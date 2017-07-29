define(["jquery"],function ($) {
	
	class basePopup {

		constructor(params) {
			this.x 	= params.x;
			this.y 	= params.y;
			this.width = params.width;
			this.height= params.height;
			this.img 	= params.img;
			this.id 	= params.id;
			this.buttonsParams = params.buttons;

			this.closed = true;
		}

		open() {

			if(!this.closed)
			{
				return;
			}
			

			this.domElement 						= document.createElement('div');
			this.domElement.id 						= this.id;
			this.domElement.className 				= "popup";
			this.domElement.display 				= "block";
			this.domElement.style.position 			= "absolute";
			this.domElement.style.top 				= this.x + "%";
			this.domElement.style.left 				= this.y + "%";
			this.domElement.style.width				= this.width + "%";
			this.domElement.style.height 			= this.height + "%";
			this.domElement.style.border 			= "1px solid black";
			var backgroundImage = document.createElement('img');
			backgroundImage.src = "app/img/" + this.img;
			backgroundImage.style.display = "block";
			backgroundImage.style.width = "100%";
			backgroundImage.style.height = "auto";

			this.domElement.append(backgroundImage);

			$("#popupContainer").append(this.domElement);
			this.$Element = $(this.domElement);

	 		this.addButton(this.buttonsParams.close.className, this.close.bind(this));

			if(this.buttonsParams.others)
			{
				for (var i = 0; i < this.buttonsParams.others.length; i++) {
					this.addButton(this.buttonsParams.others[i].className);
				}
			}


			this.closed = false;
		}

		addButton(className, callback) {

			var params;
			if(className == "close")
				params = this.buttonsParams.close;
			else if (this.buttonsParams.others)
				params = this.buttonsParams.others.find(function(o){ return o.className.includes(className)});

			var domElement 						= document.createElement('div');
			domElement.className				= params.className;
			domElement.style.display 			= "block";
			domElement.style.position 			= "absolute";
			domElement.style.top 				= params.x + "%";
			domElement.style.left 				= params.y + "%";
			domElement.style.width				= params.width + "%";
			domElement.style.height 			= params.height + "%";
			domElement.style.backgroundImage 	= "url(" + params.img + ")";
			domElement.style.border 			= "1px solid blue";
			domElement.innerHTML 				= params.txt;

			var that = this;
			domElement.onclick = function()
			{
				var className = this.className;
				var paramsIn;
				if(className == "close")
					paramsIn = that.buttonsParams.close;
				else if(that.buttonsParams.others)
					paramsIn = that.buttonsParams.others.find(function(o){ return o.className.includes(className)});

				if(typeof paramsIn.callback == "function")
					paramsIn.callback();

				if(typeof callback == "function")
					callback()
			}

			this.$Element.append(domElement);
		}

		close() {
			this.$Element.remove();
			this.closed = true;
		}

		randomizePosition(xMin,xMax, yMin, yMax) {
			if(typeof xMin == "undefined")
			{
				xMin = 50;
				xMax = 1000;
				yMin = 50;
				yMax = 500;
			} 

			this.x  = Math.random() * (xMax - xMin) + xMin;
			this.y  = Math.random() * (yMax - yMin) + yMin;

			if(!this.closed)
			{
				this.domElement.style.left = this.x;
				this.domElement.style.top  = this.y;
			}
			
		}

		randomizeSize(xMin,xMax, yMin, yMax) {
			if(typeof xMin == "undefined")
			{
				xMin = 50;
				xMax = 100;
				yMin = 25;
				yMax = 50;
			} 

			this.width  = Math.random() * (xMax - xMin) + xMin;
			this.height  = Math.random() * (yMax - yMin) + yMin;

			if(!this.closed)
			{
				this.domElement.style.height  = this.height;
				this.domElement.style.width = this.width;
			}
			
		}

		show() {
			this.domElement.style.display = "block";
		}

		hide() {
			this.domElement.style.display = "hidden";
		}

		setButtonCallback(className, cb) {
			if(className == "close")
				this.buttonsParams.close.callback = cb;
			else if(this.buttonsParams.others)
				this.buttonsParams.others.find(function(o){ return o.className.includes(className)}).callback = cb;
		}

		bringOnFront() {
			var popups = $(".popup");
		}

	}


	
	return basePopup;
    
});