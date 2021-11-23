document.addEventListener('DOMContentLoaded', function () {
    var main0 = new Splide('#main-slider0', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: true,
    });

    var thumbnails0 = new Splide('#thumbnail-slider0', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        arrows: false,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    });

    var main1 = new Splide('#main-slider1', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: true,
    });

    var thumbnails1 = new Splide('#thumbnail-slider1', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        arrows: false,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    });

    main0.sync(thumbnails0);
    main0.mount();
    thumbnails0.mount();
    main1.sync(thumbnails1);
    main1.mount();
    thumbnails1.mount();

});