document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage    : 2,
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
        arrowPath: false,
    } );
    splide.mount();
} );