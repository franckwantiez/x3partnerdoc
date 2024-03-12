$( document ).ready(function() {
		
		/* Set a generic title if none exsits in topic */
		if ( $("h1").length > 0 )
		{
			/* do nothing - already got a h1 title */
		}
		else
		{
			/* add a title if none exists */
			$("section.sage-panel").prepend("<h1>Can we help?</h1>");
			document.title = 'Can we help?';
		}
		
		
		/* Find panel link URLs starting with ../ as these are links to topics  */
		$('a[href^="../"]').each(function() 
			{
				/* change the href (which is the full path) and replace part of URL to point to new site - include both live and QA veersions of help */
				this.href = this.href.replace("desktophelp.sage.co.uk/sage200/SE/", "desktophelp.sage.co.uk/sage200/sage200standard/");
				this.href = this.href.replace("desktophelp.sage.co.uk/sage200/SE-qa/", "desktophelp.sage.co.uk/sage200/sage200standard-qa/");
				/* add 'external' class and set target attribute to a new window 'sagehelp' so it is re-used */
				$(this).addClass('external').attr('target', 'sagehelp');
			});
		
		/* find all external links and add 'external' class and '_blank' target (force it to open in new window) */
		$('a[href^="http"]').addClass('external').attr('target', '_blank'); 
		
		/* find all form links and add 'form' class */
		/* $('a[href^="form"]').addClass('form');  */
		
		
		/* handle panel search box submit */
		$( "#sage-search-form" ).submit(function(event) {
			event.preventDefault(); /* prevent default action, so doesn't refresh */
			var searchFor = $('#sage-search-input').val(); /* get value in input box */
			var searchurl = 'http://desktophelp.sage.co.uk/sage200/sage200standard/help.htm#search-' + searchFor; /* build URL */
			window.open(searchurl, "_blank");	 /* open results in new window */
			$('#sage-search-input').val(''); /* clear input box */
		});
});