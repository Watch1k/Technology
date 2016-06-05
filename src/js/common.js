/* Common JS */
$(document).ready(function(){

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	(function () {
		$('.location__select').selectric();
	}());

	(function () {
		$('.objects__el').fancybox({
			padding: 3,
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}());

	(function () {
		$('.slider').owlCarousel({
			stagePadding: 25,
			dots: true,
			arrows: true,
			margin: 60,
			loop: true,
			items: 3,
			nav: true,
			navText: [
				'<svg class="icon icon-move"><use xlink:href="img/icons.svg#icon-move"></use></svg>',
				'<svg class="icon icon-move"><use xlink:href="img/icons.svg#icon-move"></use></svg>'
			]
		});
	}());

});