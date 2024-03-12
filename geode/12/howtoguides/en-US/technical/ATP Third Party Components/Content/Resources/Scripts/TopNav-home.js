$(document).ready(function(){

	/* Set focus to search bar automatically */
	$(".search-field").focus();
		
	/* Display the last published date, and move it from the home page into the footer */
	$("#last-published-date").css("display", "block").appendTo("#last-published-footer");

});