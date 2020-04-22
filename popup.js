var megroplan = new Megroplan();

document.addEventListener("click", function(e) {
	if (e.target.id == 'saveRecipe') {
		browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
			.then(tabs => browser.tabs.get(tabs[0].id))
			.then(tab => {
                megroplan.scrapeWebsite(tab.url, function(_url) {
                    browser.tabs.create({
                        url: _url
                    });
                });
			});		
	}
});
	  
