const popupPicture = document.querySelector('.popup_type_images')
const closePopup = document.querySelector('.buttons__close-icon')
const galleryPopup = document.querySelector('.popup')


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

const gallery = document.querySelector('.gallery');
const galleryPhoto = gallery.querySelectorAll('.gallery-photo__item');
const picture = document.querySelector('.popup__picture');

galleryPhoto.forEach( item => {
  item.addEventListener('click', () => {
    picture.src = item.src;
    openPopup(galleryPopup);
  })
})

  closePopup.addEventListener('click', evt => {
    popupClose(galleryPopup);
  });

