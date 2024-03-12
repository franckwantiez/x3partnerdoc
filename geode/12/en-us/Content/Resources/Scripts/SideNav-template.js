$(document).ready(function(){
	/* Script used by SideNav skin only */

	/* Add "sage-sidenav" class to topic. This is used to target the CSS for this skin type. */
	$("html").addClass("sage-sidenav");
		
	/* Move header bar to top of screen, inside side nav container */
	$("#sage-header-title").prependTo("div.logo-wrapper");
	/* $("#sage-header-title").prependTo("title-bar-layout"); */
		
	/* remove Flare's "menu" class from Menu-Topic skin proxy. Same for TopNav and SideNav. */
	$(".menu._Skins_Sage_Menu_Topic_TopNav").removeClass("menu");
		
	/* If menu-topic-container doesn't contain skin for menu proxy, then hide it. Same for TopNav and SideNav. */		
	if ($(".menu-topic-container > ._Skins_Sage_Menu_Topic_TopNav").length) {
		/* menu exists */
	} else {
		$(".menu-topic-container").css("display", "none");
	}	
		
	/* If sage-layout-topic-panel doesn't have any visible elements, then hide the panel and set width of main topic to 100%. Same for TopNav and SideNav. */		
	if ($(".sage-layout-topic-panel").contents().is(":visible") === false) { 
		$(".sage-layout-topic-panel").css("display", "none");
		$(".sage-layout-two-columns .sage-layout-topic-main").css("width", "100%");
	}
	
	/* Scroll to top link (.go-to-top) */
 	/* Check to see if the window is top if not then display button */
	/* SIDE NAV - in desktop view, only the .body-container is scrolled */
	$(".body-container").scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.go-to-top').fadeIn();
		} else {
			$('.go-to-top').fadeOut();
		}
	});
	/* SIDE NAV - in mobile/tablet view, only the window is scrolled */	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.go-to-top').fadeIn();
		} else {
			$('.go-to-top').fadeOut();
		}
	});
	
	/* Click event to scroll to top. Scroll html or body for mobile/tablet, and scroll body-container for desktop.  */
	$('.go-to-top').click(function(){
		/* adjust speed - lower value faster */
		$('html, body, .body-container').animate({scrollTop: 0}, 300);
		return false;
	});
	
	/* Add close button to dropdowns. Same for TopNav and SideNav. */
	$(".dropDownBody").append("<a href='javascript:void(0);' class='dropDownClose'></a>");
	$(".dropDownClose").click(function() {
		$(this).parent().prev(".dropDownHead").children(".dropDownHotspot").click();
	});
		
	/* Add close button to togglers. Same for TopNav and SideNav. */
	$("[data-mc-target-name]").each(function() {
		/* for each toggler target, find the target name (togglerTarget) */
		var togglerTarget = $(this).attr("data-mc-target-name");
		/* for each toggler target, add a close link (a.togglerClose) */
		var closeTarget = $("<a href='javascript:void(0);' class='togglerClose'></a>");
		$(this).append(closeTarget);
		/* Create a selector for the toggler link (closeToggler), which is linked to this target. Look for open togglers, which include the togglerTarget name */
		var closeToggler = 'a.toggler[data-mc-state="open"][data-mc-targets*="' + togglerTarget + '"]';
		/* When the closeTarget link is clicked, clik the toggler link (closeToggler) */
		$(closeTarget).click(function(){
			$(closeToggler).click();
		});
	});

	/* Add home link to product name (div#sage-header-title) */
	/* get href from a.logo */
	var helpURL = $(".logo-wrapper a.logo").attr("href");	
	/* Wrap the header title (product name) with a link that ponts to the root help URL (home page) */ 
	$("div#sage-header-title").wrapInner("<a href='" + helpURL + "' id='sage-header-home'></a>");
	
	/* display search tips for terms with no results */		
	if($(".total-results").length == 0) {
		/* not search results page */
	} else {
		/* check for any DOM changes in results number */
		$(".total-results").on('DOMSubtreeModified', function () {
			var totalResults = $(this).text();
			/* strip quotes from term string */
			var searchTerm = $(".query").text().replace(/\"/g, "");
			/* if results number equals zero, no search results */
			if (totalResults == "0") {
				/* Display search results tips for no results */
				$("#no-results").css('display', 'block');	
			}
		});
	}

	/* Hide headings in "on this page" menu proxy if headings are not visible. */
	/* Check if menu exists. */
	if ($("#menu-on-page > ul.mc-component").length > 0) {  
		/* Check each link in menu, and hide links to hidden headings. */	
		$("#menu-on-page a[href]").each(function() {
			/* Get the link. */	
			var $link = $(this);
			/* Get the href of the link. */			
			var $linkHref = $(this).attr('href');
			/* Test if the destination of the link is hidden. */	
			if ($($linkHref).is(":hidden")) {
				/* If destination is hidden, hide the menu link (parent li element). */	
				$($link).parent().hide();
			}
		});	
	}
});