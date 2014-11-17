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


	$("#Tip a").click(function(){
		alert("abc");
		var page='html/'+$(this).data('page')+'.html';
		var $content=$('.content');
		$content.load(page,function(response, status, xhr){});
		var $this=$(this);
		$this.css({left:-$this.outerWidth()}).stop().animate({
			  left: 0
			});
	});

	$("#login").click(function(){
		alert("test");
	});

});