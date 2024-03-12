$(document).ready(function(){
	/* Script used by Tripane skin only */
		
	/* Add "sage-tripane" class to topic. This is used to target the CSS for this skin type.  */
	$("html").addClass("sage-tripane");

	/* remove Flare's "menu" class from Menu-Topic skin proxy. Same for TopNav and SideNav. */
	$(".menu._Skins_Sage_Menu_Topic_TopNav").removeClass("menu");
		
	/* If menu-topic-container doesn't contain skin for menu proxy, then hide it. Same for TopNav and SideNav. */		
	if ($(".menu-topic-container > ._Skins_Sage_Menu_Topic_TopNav").length) {
		/* menu exists */
	} else {
		$(".menu-topic-container").css("display", "none");
	}	

	/* If sage-layout-topic-panel doesn't have any visible elements, then hide the panel and set width of main topic to 100%. */		
	if ($(".sage-layout-topic-panel").contents().is(":visible") === false) { 
		$(".sage-layout-topic-panel").css("display", "none");
		$(".sage-layout-two-columns .sage-layout-topic-main").css("width", "100%");
	}

	/* Scroll to top link (.go-to-top) */
	/* Check to see if the window is top if not then display button */
	/* TOP NAV - uses window selector, and scrolls html,body */		
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.go-to-top').fadeIn();
		} else {
			$('.go-to-top').fadeOut();
		}
	});
	/* Click event to scroll to top. TopNav version different to SideNav. */
	$('.go-to-top').click(function(){
		/* adjust speed - lower value faster */
		$('html, body').animate({scrollTop: 0}, 300);
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