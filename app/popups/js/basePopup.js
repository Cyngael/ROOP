define(["jquery"],function ($) {
	
	class BasePopup {

		constructor(params) {
			this.x 	= params.x;
			this.y 	= params.y;
			this.width = params.width;
			this.height= params.height;
			this.img 	= params.img;
			this.id 	= params.id;
			this.buttonsParams = params.buttons;
			this.confirmPopupParams = params.confirmPopup;

			this.closed = true;
			this.disabled = true;
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
			this.domElement.onclick 				= this.bringToFront.bind(this);
			this.backgroundImage = document.createElement('img');
			this.backgroundImage.src = "app/img/" + this.img;
			this.backgroundImage.style.display = "block";
			this.backgroundImage.style.width = "100%";
			this.backgroundImage.style.height = "auto";

			this.domElement.append(this.backgroundImage);

			$("#popupContainer").append(this.domElement);
			this.$Element = $(this.domElement);


			this.listDomElement = [];
	 		this.addButton(this.buttonsParams.close.className, this.close.bind(this));

			if(this.buttonsParams.others)
			{
				for (var i = 0; i < this.buttonsParams.others.length; i++) {
					this.addButton(this.buttonsParams.others[i].className);
				}
			}



			this.closed = false;
			this.disabled = false;

			this.bringToFront();
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

			this.listDomElement.push(domElement);

			var that = this;
			domElement.onclick = function(e)
			{
				if(that.disabled)
					return;

				var className = this.className;
				var paramsIn;
				if(className == "close"){
					paramsIn = that.buttonsParams.close;
					e.preventDefault();
				}
				else if(that.buttonsParams.others)
					paramsIn = that.buttonsParams.others.find(function(o){ return o.className.includes(className)});

				if(typeof paramsIn.callback == "function")
					paramsIn.callback();

				if(typeof callback == "function")
					callback()


			}

			this.$Element.append(domElement);

			return domElement;
		}

		close() {

			this.disabled = true;
			if(this.confirmPopupParams)
			{
				var confirmPopup = new BasePopup(this.confirmPopupParams);
				confirmPopup.open();
				confirmPopup.setButtonCallback("close", this._doClose.bind(this));
				setTimeout(function(confirmPopup){ confirmPopup.bringToFront() },null ,confirmPopup);

			}
			else
			{
				this._doClose();
			}
		}

		_doClose() {
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

		bringToFront(e) {
			if(this.closed)
				return;

			if(e)
				e.preventDefault();

			var highterZ = 0;
			var popups = $(".popup");
			$(".popup").each(function(index, elem){				
				let z = parseInt(elem.style.zIndex);
				if(z > highterZ) 
					highterZ = z;
			});

			this.domElement.style.zIndex = highterZ + 10;
			for (var i = 0; i < this.listDomElement.length; i++) {
				this.listDomElement[i].zIndex = highterZ + 11;
			}
			//Order by Z index, Zindex -1 ?
		}

	}


	
	return BasePopup;
    
});