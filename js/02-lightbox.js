import { galleryItems } from './gallery-items.js';
// Change code below this line
const bodyEl = document.querySelector("#root");

const galleryContainer = document.querySelector('.gallery');

function createGalleryItemMarkup(item) {
  const { preview, original, description } = item;

  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `;
}

function renderGalleryItems(items) {
  const galleryItemsMarkup = items.map(createGalleryItemMarkup).join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
}

renderGalleryItems(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
