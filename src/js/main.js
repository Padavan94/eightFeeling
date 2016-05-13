/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/owl.carousel.js
//= partials/jquery.magnific-popup.min.js




app = {
	self: this,
	
	forSVG: function() {
		$('.svg').each(function() {
	        var $img = $(this);
	        var imgID = $img.attr('id');
	        var imgClass = $img.attr('class');
	        var imgURL = $img.attr('src');

	        $.get(imgURL, function(data) {
	            // Get the SVG tag, ignore the rest
	            var $svg = $(data).find('svg');

	            // Add replaced image's ID to the new SVG
	            if (typeof imgID !== 'undefined') {
	                $svg = $svg.attr('id', imgID);
	            }
	            // Add replaced image's classes to the new SVG
	            if (typeof imgClass !== 'undefined') {
	                $svg = $svg.attr('class', imgClass + ' replaced-svg');
	            }

	            $svg = $svg.removeAttr('xmlns:a');

	            // Replace image with new SVG
	            $img.replaceWith($svg);

	        }, 'xml');
	    });
	},

	init: function(){
		$(document).ready(function($) {
			self.forSVG();
		});
	}
}


