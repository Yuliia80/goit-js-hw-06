const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const makeGallery = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 150 height = 100></li>`;
const markup = images.reduce(
  (acc, item) => acc + makeGallery(item),
  ""
);

const imagesEl = document.querySelector('.gallery'); 
imagesEl.insertAdjacentHTML("afterbegin", markup);

// imagesEl.setAttribute("style", "list-style-type:none; display: flex; gap: 20px");

imagesEl.style.display = "flex";
imagesEl.style.gap = "20px";
imagesEl.style.listStyleType = "none";

console.log(imagesEl);



