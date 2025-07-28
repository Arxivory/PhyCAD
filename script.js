import { addObject  } from "./3dscene.js";

const newObjectButton = document.querySelector('.tool-new-object');
const objectContainer = document.querySelector('.object-modal');
const objectsList = document.querySelector('.object-list');
const cubeItem = document.querySelector('.cube');

newObjectButton.addEventListener('click', () => {
    objectContainer.classList.toggle('hidden');
});

function addCubeItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/cube.png" alt="Box" class="object-item__icon">
        <span class="object-item__name">Cube</span>
    `;
    objectsList.appendChild(item);
}

cubeItem.addEventListener('click', () => {
    addCubeItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Cube', 'Cube');
});