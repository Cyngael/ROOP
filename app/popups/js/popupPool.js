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
					this.listPopup[i].open();
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

		close(className) {
			
		}

	}

	return PopupPool;
    
});