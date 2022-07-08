const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const imagesEl = document.querySelector('.gallery');
const makeGallaryEl = ({ url, alt } = {}) => {
    return `<li class="gallery-item">
<a href="#">
<img src="${url}" alt="${alt}" class="img"/>
</a>
</li>`;
};
const cards = images.map(el => {
    return makeGallaryEl(el)
})
console.log(cards)
imagesEl.innerHTML = cards.join('')