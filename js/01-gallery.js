const bodyEl = document.querySelector("#root");

import { galleryItems } from './gallery-items.js';

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
galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const largeImageURL = target.dataset.source;
    openModal(largeImageURL);
  }
}
function openModal(imageURL) {
    const instance = basicLightbox.create(`<img src="${imageURL}" alt="Image">`);
    instance.show();
  }
  
console.log(galleryItems);