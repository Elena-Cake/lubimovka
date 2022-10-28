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
    document.addEventListener("keydown", closeOnButtonEscape);
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

  closePopup.addEventListener('click', evt => {
    popupClose(galleryPopup);
    document.removeEventListener("keydown", closeOnButtonEscape);
  });


  function closeOnButtonEscape(evt) {
    if (evt.key === "Escape") {
      const popupOpened = document.querySelector(".popup_opened");
      popupClose(popupOpened);
    }
  }

  galleryPopup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      popupClose(galleryPopup);
    }
  });

