$(function(){ 
     var navMain = $("#navbar");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
	
	var navbar = $('#nav');
	navbar.affix({
		offset: {
		  top: $('#header_logo').height() + parseInt($('.navbar-wrapper').css('marginTop'))
		}
	});
	navbar.on('affixed-top.bs.affix', function(){
		$('#lower-container').removeClass('affix-buffer');
	});
	navbar.on('affix.bs.affix', function(){
		$('#lower-container').addClass('affix-buffer');
	});	
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77457123-1', 'auto');
ga('send', 'pageview');
