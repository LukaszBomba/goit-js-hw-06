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

const newGallery = document.querySelector("ul.gallery");
const galleryImages = images.forEach(e => {
    newGallery.insertAdjacentHTML("afterbegin", `
    <li class="picture">
      <img src="${e.url}" alt="${e.alt}" width="800"/>
    </li>`);
  });

const GalleryItem = document.querySelectorAll("ul.gallery>li.picture");
newGallery.style.gap = "20px";
newGallery.style.listStyle = "none";
newGallery.style.display = "flex";
newGallery.style.justifyContent = "center";
newGallery.style.alignItems = "center";
newGallery.style.flexDirection = "column";