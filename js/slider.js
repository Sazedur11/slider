const images = [
    'images/wall1.jpg',
    'images/wall2.jpg',
    'images/wall3.jpg',
    'images/wall4.jpg',
    'images/wall5.jpg',
    'images/wall6.jpg',
    'images/wall7.jpg',
];

let imgIndex = 0;
const imageElement = document.getElementById('slider-image');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    const imgUrl = images[imgIndex]
    imageElement.setAttribute('src', imgUrl)
    imgIndex++
}, 1000)