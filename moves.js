$(document).ready(function() {
$("#pause").click(function(){
	$(".ubiraetsa").fadeOut('slow');
	$(".yesno").fadeIn('slow');
	return false;})
$("#yes").click(function() {
	$(".ubiraetsa").fadeIn('slow');
	$(".yesno").fadeOut('slow');
	return false;})
$("#no").click(function() {
	$(".ubiraetsa").fadeIn('slow');
	$(".yesno").fadeOut('slow');
	return false;})
})