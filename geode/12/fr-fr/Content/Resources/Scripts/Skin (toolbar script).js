/* link to skin stylesheet */
/* include link in lowercase, in case lowercase option set in target */

$('<link>')
	.appendTo($('head'))
	.attr({type: 'text/css', rel: 'stylesheet'})
	.attr('href', 'Content/Resources/Stylesheets/Tripane-skin.css');

$('<link>')
	.appendTo($('head'))
	.attr({type: 'text/css', rel: 'stylesheet'})
	.attr('href', 'content/resources/stylesheets/tripane-skin.css');

$(document).ready(function(){
		$("#header>a").after('<div id="header-content"><div id="header-title"></div></div>');
		$("#header-title").text(document.title);
});