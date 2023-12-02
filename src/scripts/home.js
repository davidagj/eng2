function createCarousel() {
  const image = [
    "../../assets/banner-inicial .png", 
  "../../assets/banner-festou.png",
  "../../assets/banner-bradesco.png"
];
  const elementoPai = document.getElementById('carousel-container');
  console.log(elementoPai);

  function createElement(value, index) {
    const newElement = document.createElement('div');
    newElement.className='carousel-item' + (index === 0 ? ' active' : '');
    const newImage = document.createElement('img');
    newImage.className='d-block';
    newImage.src=value;
    newElement.appendChild(newImage);
    elementoPai.appendChild(newElement);
  }
  
  image.forEach(createElement);
};  

document.addEventListener("DOMContentLoaded", () =>  createCarousel());
