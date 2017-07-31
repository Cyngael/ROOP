define(["jquery"],function ($) {
	
	class PopupPool {

		constructor(listPopup) {
			this.listPopup = listPopup;

			if(this.listPopup.length > 1)
				this.shuffleList();

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

		shuffleList() {
		    let counter = this.listPopup.length;

		    // While there are elements in the array
		    while (counter > 0) {
		        // Pick a random index
		        let index = Math.floor(Math.random() * counter);

		        // Decrease counter by 1
		        counter--;

		        // And swap the last element with it
		        let temp = this.listPopup[counter];
		        this.listPopup[counter] = this.listPopup[index];
		        this.listPopup[index] = temp;
		    }

		    return this.listPopup;
		}

		randomizePositions(xMin,xMax, yMin, yMax) {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].randomizePosition(xMin,xMax, yMin, yMax);
			}
		}

		randomizeSizes(xMin,xMax, yMin, yMax) {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].randomizeSize(xMin,xMax, yMin, yMax);
			}
		}
		randomizeOrder() {
			for (var i = 0; i < this.listPopup.length; i++) {
				this.listPopup[i].randomizeOrder();
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