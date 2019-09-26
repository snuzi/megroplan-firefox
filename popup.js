var megroplanUrl = "https://megroplan.com/app/recipe/scrape?url=";

document.addEventListener("click", function(e) {
	if (e.target.id == 'saveRecipe') {
		browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
			.then(tabs => browser.tabs.get(tabs[0].id))
			.then(tab => {
				var chosenPage = megroplanUrl + tab.url;
				browser.tabs.create({
					url: chosenPage
				});
			});		
	}
});
	  
