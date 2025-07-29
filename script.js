import { addObject  } from "./3dscene.js";

const newObjectButton = document.querySelector('.tool-new-object');
const objectContainer = document.querySelector('.object-modal');
const objectsList = document.querySelector('.object-list');

const cubeItem = document.querySelector('.cube');
const sphereItem = document.querySelector('.sphere');
const cylinderItem = document.querySelector('.cylinder');
const coneItem = document.querySelector('.cone');
const tubeItem = document.querySelector('.tube');
const torusItem = document.querySelector('.torus');

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

function addSphereItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/sphere.png" alt="Sphere" class="object-item__icon">
        <span class="object-item__name">Sphere</span>
    `;
    objectsList.appendChild(item);
}

function addCylinderItem() {
    const item = document.createElement('li');
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/cylinder.png" alt="Cylinder" class="object-item__icon">
        <span class="object-item__name">Cylinder</span>
    `;
    objectsList.appendChild(item);
}

function addConeItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/cylinder.png" alt="Cone" class="object-item__icon">
        <span class="object-item__name">Cone</span>
    `;
    objectsList.appendChild(item);
}

function addTubeItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/tube.png" alt="Cone" class="object-item__icon">
        <span class="object-item__name">Tube</span>
    `;
    objectsList.appendChild(item);
}

function addTorusItem() {
    const item = document.createElement('li'); 
    item.className = 'object-item';
    item.innerHTML = `
        <img src="assets/torus.png" alt="Torus" class="object-item__icon">
        <span class="object-item__name">Torus</span>
    `;
    objectsList.appendChild(item);
}

cubeItem.addEventListener('click', () => {
    addCubeItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Cube', 'Cube');
});

sphereItem.addEventListener('click', () => {
    addSphereItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Sphere', 'Sphere');
});

cylinderItem.addEventListener('click', () => {
    addCylinderItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Cylinder', 'Cylinder');
});

coneItem.addEventListener('click', () => {
    addConeItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Cone', 'Cone');
});

tubeItem.addEventListener('click', () => {
    addTubeItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Tube', 'Tube');
});

torusItem.addEventListener('click', () => {
    addTorusItem();
    objectContainer.classList.toggle('hidden');
    addObject('New Torus', 'Torus');
});