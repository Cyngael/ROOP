define(["jquery"],function ($) {
	
	class Utils {

		constructor() {}

		static formatSecToMin(sec)
		{
			return Math.trunc(sec/60).toString() + ":" + (sec%60 < 10 ? "0" + sec%60 : sec%60 );
		}

	}

	return Utils;
    
});