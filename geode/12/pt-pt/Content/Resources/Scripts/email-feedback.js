$(document).ready(function() {

		/* Get current email link */
		var currentEmailLink = document.getElementById("feedbackEmailLink").href;
	
		/* Create new email link by getting href of current link, then appending body section which includes the title and topic filename  */
		var newEmailLink = currentEmailLink + "&body=" + "Ref: " + document.title + ", " + document.location.pathname.split('/').slice(-1)[0] + "%0D%0A%0D%0APlease give us your feedback on this help page below.%0D%0A%0D%0AWe can't provide technical support from this email address, so if you need assistance then please contact our support team directly.";
		
		/* Replace the current feedback link with this new link */
		document.getElementById("feedbackEmailLink").href = newEmailLink;

});