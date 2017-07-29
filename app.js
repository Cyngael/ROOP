requirejs.config({
    baseUrl: 'libs',
    paths: {
        app 		: '../app',
        jquery 		: 'jquery-3.2.1.min',
        BasePopup 	: '../app/popups/js/basePopup',
        MailPopup 	: '../app/popups/js/mailPopup',
        PopupPool 	: '../app/popups/js/popupPool',
        GameEngine 	: '../app/gameEngine/js/gameEngine',
        TaskBar 	: '../app/gameEngine/js/taskBar',
        popupsParams 	: '../app/config/popupsParams',
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);