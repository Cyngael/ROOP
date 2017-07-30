requirejs.config({
    baseUrl: 'libs',
    paths: {
        app 		: '../app',
        jquery 		: 'jquery-3.2.1.min',
        BasePopup 	: '../app/popups/js/basePopup',
        MailPopup 	: '../app/popups/js/mailPopup',
        DoomPopup 	: '../app/popups/js/doomPopup',
        SteamPopup 	: '../app/popups/js/steamPopup',
        SkypePopup	: '../app/popups/js/skypePopup',
        PopupPool 	: '../app/popups/js/popupPool',
        Utils 	: '../app/utils/Utils',
        GameEngine 	: '../app/gameEngine/js/gameEngine',
        TaskBar 	: '../app/gameEngine/js/taskBar',
        popupsParams 	: '../app/config/popupsParams',
        gameParams 	: '../app/config/gameParams',
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);