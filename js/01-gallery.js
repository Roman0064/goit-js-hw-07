const bodyEl = document.querySelector("#root");

import { galleryItems } from './gallery-items.js';

// function createGalleryEl(items) {
//     let galleryEl = document.querySelector(".gallery");
//     let galleryElements = items.map(item =>{
//         let itemEl = document.createElement("li");
//         itemEl.classList.add("gallery-item");

//         let imgEl = document.createElement("img");
//         imgEl.classList.add("gallery__image");
//         imgEl.src = item.preview;
//         itemEl.appendChild(imgEl);

//         let titleEl = document.createElement("p");
//         titleEl.classList.add(".gallery__link");
//         titleEl.innerText = item.description;
//         itemEl.appendChild(titleEl);

//         return itemEl;
//     });
//     galleryEl.append(...galleryElements);
//     bodyEl.append(galleryEl);
//     return galleryEl;
// }

// function galleryItemClick(event){
//     console.log(event);
// }

// function bindGallery(galleryEl){
//     galleryEl.addEventListener("click", galleryItemClick);
// }

// function initGallery(items){
//     let galleryEl = createGalleryEl(items);
//     bindGallery(galleryEl);
// }

// initGallery(galleryItems);

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