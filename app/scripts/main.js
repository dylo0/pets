'use strict';

$(document).ready(function() {
    $('#owl-example').owlCarousel({
        autoPlay: true,
        stopOnHover: true
    });

    $('.flip-container').click(function () {
        $(this).toggleClass('flip');
    });

    var myNewFlow = new ContentFlow('coverFlow', { scaleFactor: 2.0 } ) ;
});