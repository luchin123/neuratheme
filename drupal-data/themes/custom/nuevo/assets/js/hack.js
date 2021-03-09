
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.nuevo = {
  attach: function(context, settings) {
	
	$('.navbar-nav li', context)
	.addClass('nav-item');
  }
};


})(jQuery, Drupal, this, this.document);
