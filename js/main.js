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
		var project = $(this).attr("id");
		$(".card").fadeOut(500);
		$("#" + project + "-card").fadeIn(500);
		
		$(".proj-tab.active").removeClass("active");
		$(this).addClass("active");
	});
	
});
