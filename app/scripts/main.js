'use strict';

$(document).ready(function() {
    $('#owl-example').owlCarousel({
        autoPlay: true,
        stopOnHover: true
    });

    $('.flip-container').click(function () {
        $(this).toggleClass('flip');
    });
});