//Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    "use strict";
	event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Include project cards
$(function() {
	"use strict";
	$("#proj-cards").load("projects.html");
});
