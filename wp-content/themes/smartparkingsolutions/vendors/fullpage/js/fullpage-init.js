
jQuery(document).ready(function() {
    larghezzaMonitor = jQuery(window).width();

    if( larghezzaMonitor > 768 ){
        var myServizi = new fullpage('#servizi', {
            navigation: true,
            navigationPosition: 'right'
        });
    }

});