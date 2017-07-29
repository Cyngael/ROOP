define(["jquery"],function ($) {
	
	class basePopup {

		constructor(params) {
			this.x 	= params.x;
			this.y 	= params.y;
			this.width = params.width;
			this.height= params.height;
			this.img 	= params.img;
			this.id 	= params.id;
			this.closed = true;
			this.buttonsParams = params.buttons;
		}

		open() {
			this.domElement 						= document.createElement('div');
			this.domElement.id 						= this.id;
			this.domElement.style.position 			= "absolute";
			this.domElement.style.top 				= this.x + "px";
			this.domElement.style.left 				= this.y + "px";
			this.domElement.style.width				= this.width + "px";
			this.domElement.style.height 			= this.height + "px";
			this.domElement.style.backgroundImage 	= "url(app/img/" + this.img + ")";
			this.domElement.style.border 			= "1px solid black";

			$("body").append(this.domElement);
			this.$Element = $(this.domElement);

	 		addButton(this.$Element,this.buttonsParams.close, this.close.bind(this));

			if(this.buttonsParams.others)
			{
				for (var i = 0; i < this.buttonsParams.others.length; i++) {
					addButton(this.$Element,this.buttonsParams.others[i]);
				}
			}


			this.closed = false;
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

		}

		hide() {

		}

	}

	function addButton($Element, params, callback) {
		var domElement 						= document.createElement('div');
		domElement.id 						= params.id;
		domElement.className				= params.class;
		domElement.style.position 			= "relative";
		domElement.style.top 				= params.x + "px";
		domElement.style.left 				= params.y + "px";
		domElement.style.width				= params.width + "px";
		domElement.style.height 			= params.height + "px";
		domElement.style.backgroundImage 	= "url(" + params.img + ")";
		domElement.style.border 			= "1px solid blue";
		domElement.innerHTML 				= params.txt;
		domElement.onclick = function()
		{
			if(typeof params.callback == "function")
				params.callback();

			if(typeof callback == "function")
				callback()
		}

		$Element.append(domElement);
	}
	
	return basePopup;
    
});