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

var splideVideoM = new Splide( '#splide_place_video-m', {
  perPage: 2,
  arrowPath: '0',
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  arrows: false,
} );
splideVideoM.mount();

var splideVideoL = new Splide( '#splide_place_video-l', {
  perPage: 3,
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  arrows: false,
} );
splideVideoL.mount();
