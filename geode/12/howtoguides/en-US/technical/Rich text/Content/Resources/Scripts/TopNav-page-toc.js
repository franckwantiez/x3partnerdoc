/* based on script from */
/* https://css-tricks.com/automatic-table-of-contents */ 

$(document).ready(function() {


		
	/* check if h2 or h3 exists on page. Only count visible headings, as some are hidden depending on normal/education(edu) variant */
	if ($("h2:visible,h3:visible").length > 0) { 
			
		/* build the opening tags of the structure */
		var ToC =
			"<nav role='navigation' class='table-of-contents'>" +
			"<ul>";
		
		/* set up variables used */
		var newLine, el, title, link, tag;
		/* set linkCount to zero */
		var linkCount = 0;
			
		/* find all h2 and h3 on page. Only count visible headings, as some are hidden depending on normal/education(edu) variant */
		$("h2:visible,h3:visible").each(function() {
			
			/* get the heading */
			el = $(this);
			/* get the heading title */
			title = el.text();
			/* get the heading tag, this is capitalised, i.e. 'H2' or 'H3' */
			tag = el.prop("tagName");
		
			/* updated linkCount, this will be id for link */
			linkCount += 1;

			link = "link" + linkCount;
			/* $(this).attr('name', link); */
			/* instead of adding attribute to header, do we need to insert an anchor tag with the name attribute? */
			$(this).prepend('<a name="' + link + '"></a>');

			/* Build the line in the list, setting the li class as the tag name, and using the heading text */
			newLine =
				"<li class=" +
				tag +
				">" +
				"<a href='#" + link + "'>" +
				title +
				"</a>" +
				"</li>";
			
			/* add the list item to the list */
			ToC += newLine;

		});	
			
		/* Add closing tags to list */	
		ToC +=
			"</ul>" +
			"</nav>";
		/* Insert list in topic, and make visible */
		/* $("#pageTOC").append(ToC).css("display", "block"); */
		/* $(".menu a.selected").after(ToC).css("display", "block");	*/
					
		$("#page-toc").append(ToC).css("display", "block");
			
		/* copy navigation menu to toggler for small screen */
		/* $("#nav-container").clone().html().appendTo("#nav-container-copy"); */
	}
	
});