stardust-chrome-app
===================

Eclipse Stardust Mobile UI packaged as a Chrome App

To test, load the the app folder aas an unpackaged chrome app, and fill in your stardust server url after launch
https://developer.chrome.com/apps/first_app#five

Most app files (js/html) are locally stored in the app but task forms are loaded from remote.

The app should work exactly the same as the Mobile UI web version


Notices:

- Windows history API is disabled in Chrome App, so back buttons functionalities are modified accordingly.

- Iframe replaced with Webview so remote form can be loaded, ways forms interacting with main app are also modified

- Included ngCsp directive for content security policy compliance

- Some other fixes targeting specific issues when converting Mobile UI Web into a Chrome App

- Server base settings can be handled more elegantly but not a major concern this stage.
