define(["jquery", "Utils"],function ($, Utils) {
	
	class BasePopup {

		constructor(params) {
			this.initialParams = params;

			this.x 	= params.x;
			this.y 	= params.y;
			this.width = params.width;
			this.height= params.height;
			this.img 	= params.img;
			this.id 	= params.id;
			this.buttonsParams = params.buttons;
			this.confirmPopupParams = params.confirmPopup;
			this.savePopupParams = params.savePopup;

			this.duplicates = [];

			this.hidden = false;
			this.closed = true;
			this.disabled = true;
		}

		open() {

			if(!this.closed)
			{
				if(this.hidden)
					this.show();

				return;
			}
			

			this.domElement 						= document.createElement('div');
			this.domElement.id 						= this.id;
			this.domElement.className 				= "popup";
			this.domElement.display 				= "block";
			this.domElement.style.position 			= "absolute";
			this.domElement.style.top 				= this.x + "px";
			this.domElement.style.left 				= this.y + "px";
			this.domElement.style.width				= this.width + "px";
			this.domElement.style.height 			= this.height + "px";
			//this.domElement.style.border 			= "8px solid #d7e4f2";
			var that = this;
            this.domElement.onclick                 = function(){
                if(that.disabled)
                {
					Utils.SoundUtils.playSound("chlong.wav");	
                }
                else
                {
                    that.bringToFront.bind(that)();
                }
            }

			this.backgroundImage = document.createElement('img');
			this.backgroundImage.src = "app/img/" + this.img;
			this.backgroundImage.style.display = "block";
			this.backgroundImage.style.width = "100%";
			this.backgroundImage.style.height = "auto";
			this.backgroundImage.style.position = "absolute";

			this.domElement.append(this.backgroundImage);

			$("#popupContainer").append(this.domElement);
			this.$Element = $(this.domElement);


			this.listDomElement = [];
	 		if(this.buttonsParams)
 			{
 				this.addButton(this.buttonsParams.close.className, this.close.bind(this));

				if(this.buttonsParams.others)
				{
					for (var i = 0; i < this.buttonsParams.others.length; i++) {
						this.addButton(this.buttonsParams.others[i].className);
					}
				}
			}
			else
				this.buttonsParams = {};

			var that = this;
			this.setButtonCallback("duplicate", function(){
				let newDuplicate = new BasePopup(that.initialParams);
				that.duplicates.push(newDuplicate);
				newDuplicate.randomizePosition();
				newDuplicate.open();
			});



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
			domElement.style.top 				= params.x + "px";
			domElement.style.left 				= params.y + "px";
			domElement.style.width				= params.width + "px";
			domElement.style.height 			= params.height + "px";
			domElement.style.backgroundImage 	= "url(" + params.img + ")";

			//domElement.style.border 			= "1px solid blue";

			domElement.style.cursor				= "pointer";
			domElement.innerHTML 				= params.txt;

			this.listDomElement.push(domElement);

			var that = this;
			domElement.onclick = function(e)
			{
				if(this.className.includes("errorSound"))
					Utils.SoundUtils.playSound("chlong.wav");	

				if(that.disabled)
				{
					return;
				}

				var className = this.className;
				var paramsIn;
				if(className.includes("close")){
					paramsIn = that.buttonsParams.close;
					e.preventDefault();
				}
				else if(that.buttonsParams.others)
					paramsIn = that.buttonsParams.others.find(function(o){ return o.className.includes(className)});


				if(paramsIn.confirmPopup)
				{
					that.confirmPopup = new BasePopup(paramsIn.confirmPopup);
					that.confirmPopup.open();

					if(paramsIn.confirmPopup.linked !== false)
					{
						that.confirmPopup.setButtonCallback("close", function(){
							that.close.bind(that)();
							paramsIn.callback();
						});
						that.disabled = true;
					}

					setTimeout(function(confirmPopup){ confirmPopup.bringToFront() },null ,that.confirmPopup);

				}
				else
				{
					if(typeof paramsIn.callback == "function")
						paramsIn.callback();
					
					if(typeof callback == "function")
						setTimeout(callback());
				}

			

				e.stopPropagation();

			}

			this.$Element.append(domElement);

			return domElement;
		}



		close() {                
			if(!this.hidden)
			{
				this.disabled = true;
				this.$Element.remove();
				this.closed = true;
			}
		}

		randomizePosition(xMin,xMax, yMin, yMax) {
			if(typeof xMin == "undefined")
			{
				xMin = 0;
				xMax = 50;
				yMin = 0;
				yMax = 50;
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
				xMin = 0;
				xMax = 100;
				yMin = 0;
				yMax = 100;
			} 

			this.width  = Math.random() * (xMax - xMin) + xMin;
			this.height  = Math.random() * (yMax - yMin) + yMin;

			if(!this.closed)
			{
				this.domElement.style.height  = this.height;
				this.domElement.style.width = this.width;
			}
			
		}

		randomizeOrder() {

			if(!this.closed)
			{
				var newZ = Math.round((Math.random() * 10000));
				this.domElement.style.zIndex = newZ;
			}
			
		}

		show() {
			this.domElement.style.display = "block";
			this.hidden = false;
		}

		hide() {
			this.domElement.style.display = "none";
			this.hidden = true;
		}

		setButtonCallback(className, cb) {
			if(className == "close")
				this.buttonsParams.close.callback = cb;
			else if(this.buttonsParams.others)
			{
				var test = this.buttonsParams.others.find(function(o){ return o.className.includes(className)});
				if(test)
					test.callback = cb;
			}
		}

		setImg(newImgPath) {
			this.img = newImgPath;
			var path = "app/img/" + this.img;

		    var imageClone = this.backgroundImage.cloneNode(true);
		    imageClone.src = path;
		    imageClone.className = "clone";
		    this.backgroundImage.parentElement.append(imageClone);

			var image = $(this.backgroundImage);
		    image.fadeOut('fast', function () {
		        image.attr('src', path);
		        image.fadeIn(10,function(){
		        	$(imageClone).remove();
		        });
		    });


		}

		majTxt(className, txt) {
			if(this.buttonsParams.others)
			{
				var test = this.buttonsParams.others.find(function(o){ return o.className.includes(className)});
				if(test)
					test.txt = txt;

				$("."+className).html(txt);
			}
		}

		bringToFront(e, zForced) {
			if(this.closed)
				return;

			if(e)
				e.preventDefault();

			console.log(this.listDomElement)


			var highterZ = 0;
			if(zForced)
				highterZ = zForced;
			else
			{
				var popups = $(".popup");
				$(".popup").each(function(index, elem){				
					let z = parseInt(elem.style.zIndex);
					if(z < 9999999 && z > highterZ) 
						highterZ = z;
				});
			}

			this.domElement.style.zIndex = highterZ + 10;
			for (var i = 0; i < this.listDomElement.length; i++) {
				this.listDomElement[i].zIndex = highterZ + 11;
			}


			if(this.confirmPopup)
				this.confirmPopup.bringToFront();
		}

	}


	
	return BasePopup;
    
});