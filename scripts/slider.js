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

var splide2 = new Splide( '#splide2', {
  perPage: 1,
  pagination: false,
  rewind: true,
  rewindByDrag: true,
  gap: '20px'
  // width: '75vw'
  // fixedWidth : '75vw',
} );

