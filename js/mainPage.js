$(document).ready(function(){

	$("#logopic").hover(function(){
		$("#picname").fadeIn("slow");
	},
	function(){
		$("#picname").fadeOut("slow");
	});


	$(".nav.nav-pills.shCont").hover(function(){
		$(this).css("background-color:#b0c4de");
	},function(){
		$(this).css("background-color:#ffffff");
	});


	$("#login").click(function(){
		alert("test");
	});

	$('.shCont').click(function(){
		//var page='html/'+$(this).data('page')+'.html';
		var page='http://sdumicrohtml.qiniudn.com/'+$(this).data('page')+'.html';
		alert(page);
		$('.content').load(page);
	});

});