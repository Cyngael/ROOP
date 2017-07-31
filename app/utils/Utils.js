define(["jquery"],function ($) {
	
	class StringUtils {

		constructor() {}

		static formatSecToMin(sec)
		{
			return Math.trunc(sec/60).toString() + ":" + (sec%60 < 10 ? "0" + sec%60 : sec%60 );
		}

	}

	class SoundUtils {

		constructor() {}

		static playSound(audioFilePath)
		{
			var audio = new Audio("app/sound/" + audioFilePath );
			audio.play();
		}

	}


	return {
		StringUtils : StringUtils,
		SoundUtils	: SoundUtils
	};
    
});