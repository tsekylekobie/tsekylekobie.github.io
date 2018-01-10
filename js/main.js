//Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    "use strict";
	event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Load project section
$(function() {
	"use strict";
	$(".proj-tab").click(function() {
		$("#proj-display").hide().load("projects.html #" + $(this).attr("id")).fadeIn("500");
	});
	$("#proj-display").load("projects.html #halcyon");
});
