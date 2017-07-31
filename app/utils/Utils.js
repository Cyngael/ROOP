define(["jquery"],function ($) {
	
	class StringUtils {

		constructor() {}

		static formatSecToMin(sec)
		{
			return Math.trunc(sec/60).toString() + ":" + (sec%60 < 10 ? "0" + sec%60 : sec%60 );
		}

	}

	class SoundUtils {

		constructor() {
			this.audios = {};
		}

		playSound(audioFilePath)
		{
			if(this.audios[audioFilePath])
				audio = this.audios[audioFilePath];
			else
				var audio = new Audio("app/sound/" + audioFilePath );
			
			audio.play();

			this.audios[audioFilePath] = audio;
		}

		loopSound(audioFilePath)
		{
			if(this.audios[audioFilePath])
				audio = this.audios[audioFilePath];
			else
				var audio = new Audio("app/sound/" + audioFilePath );

			audio.addEventListener('ended', this._loopSound, false);
			audio.play();

			this.audios[audioFilePath] = audio;

		}

		_loopSound()
		{
			this.currentTime = 0;
		    this.play();
		}

		stopSound(audioFilePath)
		{
			var audio = this.audios[audioFilePath];
			console.log(audio)
			audio.removeEventListener("ended", this._loopSound);
			audio.pause();
			audio.currentTime = 0;
		}

	}

	var soundUtils = new SoundUtils();


	return {
		StringUtils : StringUtils,
		SoundUtils	: soundUtils
	};
    
});