$(document).ready(function($){
	$(".homepage-slides").owlCarousel({
		items: 1,
		navigation: true,
		pagination: false,
		autoPlay: false,
		loop: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		mouseDrag: false,
		touchDrag: false,
		itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsMobile : [479,1]
	});

	
	$('.homepage-slides').on('translate.owl.carousel', function(event){
		$(".single-slide-item h2").removeClass("fadeInUp animated").css("opacity", "0");
		$(".single-slide-item p").removeClass("fadeInRight animated").css("opacity", "0");
	});
	$('.homepage-slides').on('translated.owl.carousel', function(event){
		$(".single-slide-item h2").addClass("fadeInUp animated").css("opacity", "1");
		$(".single-slide-item p").addClass("fadeInRight animated").css("opacity", "1");
	});

	//Popup Single Service Image
	$(".gallery-lightbox").magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//Menu Responsive
	$("#navigation").slicknav({
		prependTo: ".responsive-menu-wrap"
	});

	new WOW().init();
});

$(window).on("load",function() {
	$(".factorian-site-preloader-wrap").fadeOut(3000);
});

