$(document).ready(function(){

	$("#logopic").hover(function(){
		$("#picname").fadeIn("slow");
	},
	function(){
		$("#picname").fadeOut("slow");
	});


	$(".nav.nav-bar").hover(function(){
		$(this).css("background-color:#b0c4de");
	},function(){
		$(this).css("background-color:#ffffff");
	});

});