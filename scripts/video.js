function findVideos() {
  const videos = document.querySelectorAll('.video__item');

  videos.forEach(video => setupVideo(video));
}

function setupVideo(video) {
  const link = video.querySelector('.video__link');
  const picture = video.querySelector('.video__item-picture');
  const button = video.querySelector('.video__button');
  const id = parsePictureURL(picture);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video__item_enabled');
}

function parsePictureURL(picture) {
  const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  const url = picture.src;
  const match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('video__item-picture');
  iframe.setAttribute('style', 'opacity: 1');

  return iframe;
}

function generateUrl(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();