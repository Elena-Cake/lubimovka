// section Perfomances
var splidePerfomances = new Splide( '#splide_place_perfomances', {
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
splidePerfomances.mount();

// section Gallery
var splideGallery = new Splide( '#splide_place_gallery-popup', {
  perPage: 1,
  pagination: false,
  rewind: true,
  rewindByDrag: true,
  gap: '20px'
} );

// section Play
var splidePlay = new Splide( '#splide_place_play', {
  perPage: 5,
  focus: 0,
  autoWidth: true,
  omitEnd: true,
  drag: 'free',
  snap: false,
  mediaQuery: 'min',

} );

splidePlay.on( 'overflow', function ( isOverflow ) {
  splidePlay.options = {
    arrows    : isOverflow,
    pagination: isOverflow,
    drag      : isOverflow,
  };
} );

splidePlay.mount();

// section Persons
var splidePersons = new Splide( '#splide_place_persons', {
 type: 'loop',
 perPage: 4,
 focus: 0,
 autoWidth: true,
 omitEnd: true,
 drag: 'free',
 snap: false,
 mediaQuery: 'min',
 breakpoints: {
   1100: {
     destroy: true,
   },
   764: {
     type: 'slide',
   },
 }
} );
splidePersons.mount();

// section Video
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
