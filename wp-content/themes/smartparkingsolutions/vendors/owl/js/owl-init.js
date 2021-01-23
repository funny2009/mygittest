jQuery(".referenze").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    touchDrag  : true,
    mouseDrag  : true,
    transitionStyle : "fade",
    navigationText: ["<i class='menu-icon mdi mdi-chevron-left'></i>","<i class='menu-icon mdi mdi-chevron-right'></i>"]
});

jQuery( document ).ready(function() {
    var monitorWidth = jQuery(window).width();
    var monitorHeight = jQuery(window).height();
    var footerHeight = jQuery('.site-footer').outerHeight();

    var calcReferenze = monitorHeight - footerHeight;

    if( monitorWidth > 768 ) {
        jQuery('.item').height(calcReferenze);
    }

});