define(["jquery", "BasePopup"],function ($, BasePopup) {
	
	class MailPopup extends BasePopup {

		constructor(params) {
			super(params);

			this.selectList = params.selectList;
			this.goodAnswer = false;
			this.sended = false;
		}

		open() {
			super.open();


			this.domSelect = document.createElement("select");
			for (var i = 0; i < this.selectList.elements.length; i++) {
				let option = document.createElement("option");
				option.value = this.selectList.elements[i];
				option.innerHTML = this.selectList.elements[i];
				this.domSelect.append(option);
			}

			this.domSelect.style.position 			= "absolute";
			this.domSelect.style.top 				= this.selectList.x + "%";
			this.domSelect.style.left 				= this.selectList.y + "%";
			this.domSelect.style.width				= this.selectList.width + "%";
			this.domSelect.style.height 			= this.selectList.height + "%";

			this.domElement.append(this.domSelect);

			this.setButtonCallback("sendMail", this.sendMail.bind(this))
		}

		sendMail() {
			this.sended = true;
			if(this.selectList.answer == this.domSelect.value)
			{
				console.log("SUCCES : Sending mail to the right person !")
				this.goodAnswer = true;
				this.close();
			}
			else
			{
				console.log("FAIL : Sending mail to the wrong person !")
				this.goodAnswer = false;
				this.close();
			}
		}

	}


	
	return MailPopup;
    
});