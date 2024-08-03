const images = [
    'jpg/01.jpg',
    'jpg/02.jpg',
    'jpg/03.jpg',
    'jpg/04.jpg',
    'jpg/05.jpg',
    'jpg/06.jpg',
    'jpg/07.jpg',
    'jpg/08.jpg',
    'jpg/09.jpg',
    'jpg/010.jpg'
];

document.getElementById('generateBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = `<img src="${randomImage}" alt="Random Image">`;
});
