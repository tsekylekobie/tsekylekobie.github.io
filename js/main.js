//Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    "use strict";
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Button functionality
$(function() {
	"use strict";
	function showText(linkId) {
		$("#container").animate({top: "-15vh"}, {duration: 600, queue: false});
		
		$(".link").removeClass("clicked");
		$("#" + linkId).addClass("clicked");
		$(".display").hide();
		$("#" + linkId + "-text").fadeIn();
		
		$(".link", this).off().on('click', function() {
			showText($(this).attr('id'));
		});
		$("#" + linkId).off().on('click', function() { hideText(linkId); });
	}
	
	function hideText(linkId) {
		$("#container").animate({top: "0vh"}, {duration: 600, queue: false});
		
		$(".link").removeClass("clicked");
		$(".display").hide();
		
		$(".link", this).off().on('click', function() {
			showText($(this).attr('id'));
		});
	}
	
	$(".link", this).on('click', function() {
		showText($(this).attr('id'));
	})
});
