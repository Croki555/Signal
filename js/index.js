document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage    : 3,
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
        arrowPath: false,
    } );
    splide.mount();
} );