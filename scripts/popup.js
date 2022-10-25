const popupPicture = document.querySelector('.popup_type_images')
const closePopup = document.querySelector('.buttons__close-icon')
const galleryPopup = document.querySelector('.popup')


function openPopup(popup) {
  splide2.mount();
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  splide2.destroy();
  popup.classList.remove('popup_opened');
}


const gallery = document.querySelector('.gallery');
const galleryPhoto = gallery.querySelectorAll('.gallery-photo__item');
const picture = document.querySelector('.popup__picture');
const photoContainer = document.querySelector('.popup__photo-container')
const photosTemplate = document.querySelector('.photos').content;

fillPopup();

galleryPhoto.forEach( item => {
  item.addEventListener('click', () => {
    openPopup(galleryPopup);
  })
})

function fillPopup() {
  const photos = Array.from(galleryPhoto);
  photos.forEach( item => {
    const imgPopup = photosTemplate.cloneNode(true);
    imgPopup.querySelector('.photo').src = item.src;
    photoContainer.append(imgPopup);
  });
}


console.log()
  closePopup.addEventListener('click', evt => {
    popupClose(galleryPopup);
  });

