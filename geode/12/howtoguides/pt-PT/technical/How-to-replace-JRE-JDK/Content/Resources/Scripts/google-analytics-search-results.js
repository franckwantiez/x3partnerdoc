function sendSearchTerm() {
	/* If current page has a #search-xxx parameter, then record it as a search for  event */
	if (location.hash.indexOf('#search-') > -1) {
		
		/* get the search term, i.e. the bit after "#search-" , and replace '%20' with a space (to make URLs consistent from browsers) */
		searchterm = location.hash.split('#search-')[1].replace(/%20/g, " "); 
		
		/* send to Analytics as event with 'Search' category and 'SearchFor' action */
		ga('send', 'event', 'Search', 'SearchFor', searchterm);
		/* console.log("Send search term: " + searchterm); */
	}
}

$(document).ready(function(){
		/* wait until ga script has loaded */
		
		/* send the search term when first open search results page */
		sendSearchTerm();

		/* when window hash changes (e.g. repeat search on results page), then check the hash for new a new search term */
		window.onhashchange = sendSearchTerm;
});