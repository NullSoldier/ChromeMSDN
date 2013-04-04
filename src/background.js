chrome.browserAction.onClicked.addListener(function(tab) {
	if (tab.url.indexOf("msdn.microsoft.com") == -1) {
		alert ("Extension is only usable on msdn.microsoft.com");
		return;
	}
	chrome.tabs.executeScript(null, {file:"content.js"});
});
