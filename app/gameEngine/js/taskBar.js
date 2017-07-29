define(["jquery"],function ($) {
	
	class TaskBar {

		constructor(params) {
			
			this.enable = false;
			this.render();
		}

		enable(disable) {
			this.enable = !disable;
		}

		
		render() {
			
			if($("#taskBar"))
				$("#taskBar").remove();

			this.domElement = document.createElement('div');
			this.domElement.id = "taskBar";
			this.domElement.style.width = "100%";
			this.domElement.style.height = "5%";
			this.domElement.style.backgroundColor = "blue";

		}

	}

	return TaskBar;
    
});