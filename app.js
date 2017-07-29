requirejs.config({
    baseUrl: 'libs',
    paths: {
        app 		: '../app',
        jquery 		: 'jquery-3.2.1.min',
        basePopup 	: '../app/popups/js/basePopup',
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);