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