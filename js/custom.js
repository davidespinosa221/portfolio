(function($) {

	"use strict";

	/* ----------------------------------------------------------- */
	/*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

	$(window).on("load", function() {

		/* ----------------------------------------------------------- */
		/*  PAGE PRELOADER
        /* ----------------------------------------------------------- */
		
		var preloader = $('#preloader');
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);

	});

	$(document).ready(function() {
		/* ----------------------------------------------------------- */
		/*  MOBILE MENU
		/* ----------------------------------------------------------- */

		$('#mobile-nav li').on('click', function () {
			$('#mobile-nav li').removeClass('active');
			$(this).addClass('active');
			$('#desktop-nav li').removeClass('active');
			var index = $(this).index() + 1;
			$('#desktop-nav li:nth-child(' + index + ')').addClass('active');
		});
		
		$('#trigger-mobile').on('click', function () {
			$(this).toggleClass('show-menu');
			$('#mobile-nav').toggleClass('hide-list');
		});

		/* ----------------------------------------------------------- */
		/*  DESKTPOP MENU
        /* ----------------------------------------------------------- */

		$('#desktop-nav li').on('click', function () {
			$('#desktop-nav li').removeClass('active');
			$(this).addClass('active');
			$('#mobile-nav li').removeClass('active');
			var index = $(this).index() + 1;
			$('#mobile-nav li:nth-child(' + index + ')').addClass('active');
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

		if ($('.gridlist').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

		$(".gridlist figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
			if ($(window).width() < 992) {
				$('#trigger-mobile').addClass('hide-trigger');
			}
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

		$("body").on('click', '.nav-close', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
			$('#trigger-mobile').removeClass('hide-trigger');
		});
		$("body").on('click', '.nav-prev', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				$('#trigger-mobile').removeClass('hide-trigger');
			}
		});
		$("body").on('click', '.nav-next', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				$('#trigger-mobile').removeClass('hide-trigger');
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

		var item = $(".gridlist li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			if ($(window).width() > 991) {
				$(item[i]).hoverdir();
			}
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$("#contactform").on("submit", function() {
			$("#message").text("Sending...");
			var form = $(this);
			$.ajax({
				url: form.attr("action"),
				method: form.attr("method"),
				data: form.serialize(),
				success: function(result) {
					if (result === "success") {
						$("#contactform").find(".output_message").addClass("success");
						$("#message").text("Message Sent!");
					} else {
						$("#contactform").find(".output_message").addClass("error");
						$("#message").text("Error Sending!");
					}
				}
			});
			return false;
		});

	});

	$(document).keyup(function(e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
		}
	});


})(jQuery);
