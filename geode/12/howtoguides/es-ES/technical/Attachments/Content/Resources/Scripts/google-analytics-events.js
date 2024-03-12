$(document).ready(function(){
	
	/* -------------- Feedback -------------- */
	/* Yes click */
	$('.feedback-yes').click(function() {
		/* fade out question, fade in thankyou message */
		$('.feedback-question').fadeOut(function() {
			$('.feedback-reason.yes-thanks').fadeIn();
		});
					
		/* ga('send', 'event', 'Feedback - Yes', 'N/A', location.href); */
		gtag('event', 'N/A', {
			'event_category': 'Feedback - Yes',
			'event_label': location.href
		});

	});

	/* No click */
	$('.feedback-no').click(function() {
		/* fade out question, fade in thankyou message */
		$('.feedback-question').fadeOut(function() {
			$('.feedback-reason.no').fadeIn();
		});
	});
		
	/* No - response reasons */
	$('.feedback-reason .option').change(function() {
		/* if any options change, disable checkbox, record event, and fade in thankyou and email link */
		$(this).attr('disabled', true);
			if ($(this).is(':checked')) {
				/* get the label text of the reason (option) text that's selected */
				var reason = $(this).attr('data-analytics-label');	
				/* ga('send', 'event', 'Feedback - No', reason, location.href); */
				gtag('event', reason, {
					'event_category': 'Feedback - No',
					'event_label': location.href
				});
			}
		$('.feedback-reason.no-thanks').fadeIn();
	});

		
	/* ---------- Email link ------------------- */
	/* Check if page has an email link */
	if ($("#feedbackEmailLink").length > 0) {
		/* Get current email link */
		var currentEmailLink = document.getElementById("feedbackEmailLink").href;		
	
		/* Create new email link by getting href of current link, then appending body section which includes the title and topic filename  */
		var newEmailLink = currentEmailLink + "&body=" + "Ref: " + document.title + ", " + document.location.pathname.split('/').slice(-1)[0] + "%0D%0A%0D%0APlease give us your feedback on this help page below.%0D%0A%0D%0ASorry, but we can't provide technical support from this email address. If you need assistance, then please contact our support team directly.";
		
		/* Replace the current feedback link with this new link */
		document.getElementById("feedbackEmailLink").href = newEmailLink;
	}
		
	
	/* ---------- PDF link ------------------- */		
	$("a[href*='.pdf']").click(function() {
		/* ga('send', 'event', 'Link', 'PDF', this.href); */
		gtag('event', 'PDF', {
			'event_category': 'Link',
			'event_label': this.href
		});
		/* console.log("PDF: " + this.href); */
	});

	/* ---------- XML link ------------------- */		
	$("a[href*='.xml']").click(function() {
		/* ga('send', 'event', 'Link', 'XML', this.href); */
		gtag('event', 'XML', {
			'event_category': 'Link',
			'event_label': this.href
		});
		/* console.log("XML: " + this.href); */
	});	
		
	/* ---------- CSV link ------------------- */		
	$("a[href*='.csv']").click(function() {
		/* ga('send', 'event', 'Link', 'CSV', this.href); */
		gtag('event', 'CSV', {
			'event_category': 'Link',
			'event_label': this.href
		});
		/* console.log("CSV: " + this.href); */
	});
		
	/* ---------- XLS link ------------------- */		
	$("a[href*='.xls']").click(function() {
		/* ga('send', 'event', 'Link', 'XLS', this.href); */
		gtag('event', 'XLS', {
			'event_category': 'Link',
			'event_label': this.href
		});
		/* console.log("XLS: " + this.href); */
	});
		
	/* ----- record scroll event (disabled) ------ */
	/*
	var scrollPage = 0;		
	$(window).scroll(function () { 
		if (scrollPage < 1) {
			if ($(window).scrollTop() > $('body').height() / 5) {
				ga('send', 'event', 'View', 'Scroll', location.href);	
				scrollPage = scrollPage + 1;
			}
		}
	});
	*/
		
	/* ----- record search terms with no results ------ */		
	if($(".total-results").length == 0) {
			/* not search results page */
	} else {
			/* check for any DOM changes in results number */
			$(".total-results").on('DOMSubtreeModified', function () {
				var totalResults = $(this).text();
				/* strip quotes from term string */
				var searchTerm = $(".query").text().replace(/\"/g, "");
				/* if results number equals zero, send analytics event */
				if (totalResults == "0") {
					/* ga('send', 'event', 'Search', 'No results', searchTerm); */
					gtag('event', 'No results', {
						'event_category': 'Search',
						'event_label': searchTerm
					});
					/* console.log("Term: " + searchTerm + " Results: " + totalResults); */
				}
			});
	}
		
		
	/* ----- record SearchResult event for page views from a search ------ */		
	/* If current page has a ?Highlight=xxx parameter, then record it as a search result event */
	/* highlightterm = location.search.split("Highlight=")[1]; */
	/*
	if (location.search.indexOf('?Highlight=') > -1) {
		
	
		gtag('event', 'SearchResult', {
			'event_category': 'Search',
			'event_label': location.href
		});
	
	}
	*/	
	
	/* ----- Video events ------ */		
	var watch0 = 0;
	var watch1 = 0;
	var watch2 = 0;
	
	/* Video play started */		
	$("video").one("play", function (e) {
		
		/* var videoFile = $("source", this).attr("src"); */
	
		if(watch0 < 1)
		{
			/* Started watching */
			/* ga('send', 'event', 'Video', 'View start', location.href); */
			gtag('event', 'View start', {
				'event_category': 'Video',
				'event_label': location.href
			});	
			/* console.log("Video start: " + location.href); */
		}
		/* Reset for duplicates */
		watch0 = watch0 + 1; 
	});
		
	/* Video time segments */		
	$("video").bind("timeupdate", function() {
		var currentTime = this.currentTime;
		if(currentTime > 0.25 * (this.duration))
		{
			if(watch1 < 1)
			{
				/* Watched 25% */
				/* ga('send', 'event', 'Video', 'View middle', location.href); */
				gtag('event', 'View middle', {
					'event_category': 'Video',
					'event_label': location.href
				});	
				/* console.log("Video Middle: " + location.href); */
			}
			/* Reset for duplicates */
			watch1 = watch1 + 1; 
		}
						
		if(currentTime > 0.75 * (this.duration))
		{
			if(watch2 < 1)
			{
				/* Watched 75% */
				/* ga('send', 'event', 'Video', 'View end', location.href); */
				gtag('event', 'View end', {
					'event_category': 'Video',
					'event_label': location.href
				});	
				/* console.log("Video End: " + location.href); */
			}
			/* Reset for duplicates */
			watch2 = watch2 + 1; 
		}
	});

	/* Track all outbound links (that begin with http) */
	$('a[href^="http"]').click(function() {
		gtag('event', 'Outbound', {
			'event_category': 'Link',
			'event_label': this.href
		});	
	});
		
});