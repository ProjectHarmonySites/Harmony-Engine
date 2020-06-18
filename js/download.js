$(document).ready(function() {
	$(".pop-up").hide();

	$("#mac-button").mouseenter(function() {
		$("#mac-popup").slideDown(300);
	}).mouseleave(function() {
		$("#mac-popup").slideUp(300);
	});

	$("#windows-button").mouseenter(function() {
		$("#windows-popup").slideDown(300);
	}).mouseleave(function() {
		$("#windows-popup").slideUp(300);
	});

	$("#linux-button").mouseenter(function() {
		$("#linux-popup").slideDown(300);
	}).mouseleave(function() {
		$("#linux-popup").slideUp(300);
	});
});