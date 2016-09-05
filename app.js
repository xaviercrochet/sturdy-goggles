$(function(){
	var menuOpened = false;
	$('#menu-button').click(function(e){
		if(menuOpened) {
			$('.menu').css("transform", "translate(0%)");	
		}
		else {
			$('.menu').css("transform", "translate(100%)");	
		}
		menuOpened = !menuOpened & true;
	});
});