function createCarousel() {
  const image = [
    "../../assets/banner-inicial .png", 
  "../../assets/banner-festou.png",
  "../../assets/banner-bradesco.png"
];
  const elementoPai = document.getElementById('carousel-container');
  
  function createElement(value, index) {
    const newElement = document.createElement('div');
    newElement.className='carousel__wrapper carousel-item' + (index === 0 ? ' active' : '');
    const newImage = document.createElement('img');
    newImage.className='wrapper__image d-block w-100';
    newImage.src=value;
    elementoPai.appendChild = (newElement);
    newElement.appendChild = (newImage);
  }
  
  image.forEach(createElement);
};  

document.addEventListener("DOMContentLoaded", () =>  createCarousel());
