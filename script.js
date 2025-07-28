const newObjectButton = document.querySelector('.tool-new-object');
const objectList = document.querySelector('.object-modal');

newObjectButton.addEventListener('click', () => {
    objectList.classList.toggle('hidden');
});