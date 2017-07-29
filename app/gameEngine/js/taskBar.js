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

		}

	}

	return TaskBar;
    
});