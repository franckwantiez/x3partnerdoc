$(document).ready(function(){
	/* Script used by TopNav skin only */
		
	/* Add "sage-topnav" class to topic. This is used to target the CSS for this skin type.  */
	$("html").addClass("sage-topnav");
	
	/* Moves the menu bar to the container */
	$("nav.tab-bar").prependTo("#menu-bar-container");

	/* Moves the skip to content to top of page, back to original position - first div inside .off-canvas-content.inner-wrap */ 
	$(".skip-to-content").prependTo(".off-canvas-content.inner-wrap div:first");
		
	/* remove Flare's "menu" class from Menu-Topic skin proxy. Same for TopNav and SideNav. */
	$(".menu._Skins_Sage_Menu_Topic_TopNav").removeClass("menu");
		
	/* hide Menu-Topic container if the menu is empty. Same for TopNav and SideNav. Only checks menu if it is visible, in case there are hidden menus. */
	if ($("._Skins_Sage_Menu_Topic_TopNav:visible").length > 0) {} else {
		$("div.menu-topic-container").css("display", "none");	
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

	/* Add home link to product name (div#sage-header-title) */
	/* get href from a.logo */
	var helpURL = $(".logo-wrapper a.logo").attr("href");	
	/* Wrap the header title (product name) with a link that ponts to the root help URL (home page) */ 
	$("div#sage-header-title").wrapInner("<a href='" + helpURL + "' id='sage-header-home'></a>");
		
});