import { addObject  } from "./3dscene.js";

const newObjectButton = document.querySelector('.tool-new-object');
const objectContainer = document.querySelector('.object-modal');
const objectsList = document.querySelector('.object-list');
const objectItems = document.querySelectorAll('.object-container');


newObjectButton.addEventListener('click', () => {
    objectContainer.classList.toggle('hidden');
});

function addCubeItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/cube.png" alt="Box" class="object-item__icon">
        <span class="object-item__name">Cube</span>
    `;
    objectsList.appendChild(item);
}

function addSphereItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/sphere.png" alt="Sphere" class="object-item__icon">
        <span class="object-item__name">Sphere</span>
    `;
    objectsList.appendChild(item);
}

function addCylinderItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/cylinder.png" alt="Cylinder" class="object-item__icon">
        <span class="object-item__name">Cylinder</span>
    `;
    objectsList.appendChild(item);
}

function addConeItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/cylinder.png" alt="Cone" class="object-item__icon">
        <span class="object-item__name">Cone</span>
    `;
    objectsList.appendChild(item);
}

function addTubeItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/tube.png" alt="Cone" class="object-item__icon">
        <span class="object-item__name">Tube</span>
    `;
    objectsList.appendChild(item);
}

function addTorusItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.draggable = true;
    item.innerHTML = `
        <img src="assets/torus.png" alt="Torus" class="object-item__icon">
        <span class="object-item__name">Torus</span>
    `;
    objectsList.appendChild(item);
}

objectItems.forEach(item => {
    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', item.className);
    });
});

objectsList.addEventListener('dragover', (event) => {
    event.preventDefault(); 
});

objectsList.addEventListener('drop', (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('text/plain');
    
    switch (type) {
        case 'object-container cube':
            addCubeItem();
            addObject('Cube', 'Cube'); 
            break;
        case 'object-container sphere':
            addSphereItem();
            addObject('Sphere', 'Sphere');
            break;
        case 'object-container cylinder':
            addCylinderItem();
            addObject('Cylinder', 'Sylinder');
            break;
        case 'object-container cone':
            addConeItem();
            addObject('Cone', 'Cone');
            break;
        case 'object-container tube':
            addTubeItem();
            addObject('Tube', 'Tube');
            break;
        case 'object-container torus':
            addTorusItem();
            addObject('Torus', 'Torus');
            break;
        default:
            console.warn(`Unknown object type: ${type}`);
    }
});






