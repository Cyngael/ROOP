define(["jquery"],function ($) {
	
	class PopupPool {

		constructor(listPopup) {
			this.listPopup = listPopup;
		}

		
		openAll() {
			console.log("Opening : ", this.listPopup);

			for (var i = 0; i < this.listPopup.length; i++) {
				if(typeof this.listPopup[i].openAll == "function")
					this.listPopup[i].openAll();
				else 
				{
					if(this.listPopup[i].closed)
						this.listPopup[i].open();
					else
						this.listPopup[i].bringToFront();
				}
			}
		}

		randomizePositions(xMin,xMax, yMin, yMax) {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].randomizePosition();
			}
		}

		randomizeSizes(xMin,xMax, yMin, yMax) {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].randomizeSize();
			}
		}

		closeAll() {
			console.log("Opening : ", this.listPopup);

			for (var i = 0; i < this.listPopup.length; i++) {
				if(typeof this.listPopup[i].closeAll == "function")
					this.listPopup[i].closeAll();
				else 
				{
					if(!this.listPopup[i].closed)
						this.listPopup[i].close();
				}
			}

		}

		bringToFront() {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].bringToFront();
			}

		}

	}

	return PopupPool;
    
});