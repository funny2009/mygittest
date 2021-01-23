jQuery('#openMobileMenu').click(function (e) {
    jQuery('#menu-mobile').fadeIn();
});

jQuery('#closeMenu').click(function (e) {
    jQuery('#menu-mobile').fadeOut();
});

jQuery(document).ready(function(){
    jQuery('.privacy label').append('<span class="checkmark"></span>');
});