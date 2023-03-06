import EasterEgg from './modules/EasterEgg.mjs';

var imageElement = document.getElementsByClassName("profile-image")[0];
if (imageElement) {
    var easterEgg = new EasterEgg(imageElement, ['#000000', '#00FF00']);
    imageElement.addEventListener('click', easterEgg.start);
}
