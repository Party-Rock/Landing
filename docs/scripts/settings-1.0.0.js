/*--- Settings 1.0.0 --- UnreaLSnake ---*/

/*--- CSS3 Amination ---*/
jQuery('.animated').waypoint(function() {
	var animation = jQuery(this).attr("data-animate");
	jQuery(this).addClass(animation);
}, { offset: '80%' });
/*--- CSS3 Amination ---*/

/*--- Magnific Popup ---*/
$(document).ready(function() {
	$('.gallery_image_link').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});
});
/*--- Magnific Popup ---*/

/*--- Readmore Buttons ---*/
$('.readmore').readmore({
	speed: 300,
	maxHeight: 0,
	heightMargin: 0,
	moreLink: '<a class="button-l button-l--text" href="#">Read More</a>',
	lessLink: '<a class="button-l button-l--text" href="#">Close</a>',
	embedCSS: false,
	sectionCSS: '',
	expandedClass: 'readmore-js-expanded',
	collapsedClass: 'readmore-js-collapsed'
});
/*--- Readmore Buttons ---*/