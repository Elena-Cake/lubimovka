var splide = new Splide( '#splide_place_perfomances', {
  perPage: 3,
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  breakpoints: {
    764: {
      destroy: true,
    },
  }
} );
splide.mount();

var splide2 = new Splide( '#splide_place_gallery-popup', {
  perPage: 1,
  pagination: false,
  rewind: true,
  rewindByDrag: true,
  gap: '20px'
} );

var splidePlay = new Splide( '#splide_place_play', {
  perPage: 5,
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  mediaQuery: 'min',
  breakpoints: {
    1279: {
      destroy: true,
    },
  }
} );
splidePlay.mount();
