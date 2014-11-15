chrome.app.runtime.onLaunched.addListener(function() {
	var screenWidth = screen.availWidth,
		screenHeight = screen.availHeight;

	chrome.app.window.create('index.html', {
		'bounds': {
			'width': screenWidth>=768?768:screenWidth,
			'height': screenHeight
		}
	});
});