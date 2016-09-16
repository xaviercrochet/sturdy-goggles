
var displayedContent;

$(function(){
	var initialHash = window.location.hash;
	parseRouteHash(initialHash);
});

$(function(){
	$(window).on('hashchange', function(){
		var hash = location.hash;
		parseRouteHash(hash);
	});

});

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

var apiEndpoint = "https://images-mgmt.herokuapp.com/images";
var imagesRepository = "images/";

$.getJSON(apiEndpoint, function(images) {
	var items = []
	$.each(images, function(key, val) {
		items.push("<img src='" +  imagesRepository + val.filename + "' class='center image' />");
	});
	$('#image-content').append(items);
});

function parseRouteHash(hash){
	if(hash == '#about'){
		displayAboutMeContent();
	}
	else {
		displayImageContent();
	}
}

function displayAboutMeContent(){
	displayContent("#about-content");
};

function displayImageContent(){
	displayContent("#image-content");
};

function displayContent(contentId){
	hideContent(displayedContent);
	$(contentId).show();
	displayedContent = contentId;
};

function hideContent(contentId){
	$(contentId).hide();
};