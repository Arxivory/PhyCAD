import { Cube } from './Objects/Cube.js';
import { Sphere } from './Objects/Sphere.js';
import { Cone } from './Objects/Cone.js'
import { Cylinder } from './Objects/Cylinder.js';
import { Ring } from './Objects/Ring.js';
import { Tube } from './Objects/Tube.js';

const canvas = document.getElementById('scene');
const width = canvas.clientWidth, height = canvas.clientHeight, fov = 45;
let aspectRatio = width / height;
let objects = [];

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
camera.position.set(5, 3, 5);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

const gridHelper = new THREE.GridHelper(30, 30);
const axesHelper = new THREE.AxesHelper(10);

const light = new THREE.AmbientLight(0xffffff, 0.3);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);

scene.add(axesHelper);
scene.add(gridHelper);
scene.add(light);
scene.add(pointLight);
scene.add(camera);

let id = 0;

function addCube(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const cube = new Cube(id, name, position, rotation, scale, material);
    objects.push(cube);
    scene.add(cube.mesh);
}

function addSphere(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const sphere = new Sphere(id, name, position, rotation, scale, material);
    objects.push(sphere);
    scene.add(sphere.mesh);
}

function addCone(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const cone = new Cone(id, name, position, rotation, scale, material);
    objects.push(cone);
    scene.add(cone.mesh);
}

function addCylinder(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const cylinder = new Cylinder(id, name, position, rotation, scale, material);
    objects.push(cylinder);
    scene.add(cylinder.mesh);
}

function addRing(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const ring = new Ring(id, name, position, rotation, scale, material);
    objects.push(ring);
    scene.add(ring.mesh);
}

function addTube(name) {
    const position = new THREE.Vector3(0, 0, 0);
    const rotation = new THREE.Vector3(0, 0, 0);
    const scale = new THREE.Vector3(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const tube = new Tube(id, name, position, rotation, scale, material);
    objects.push(tube);
    scene.add(tube.mesh);
}

function addObject(name, objectType) {
    switch (objectType) {
        case 'Cube':
            addCube(name);
            break;
        case 'Sphere':
            addSphere(name);
            break;
        case 'Cone':
            addCone(name);
            break;
        case 'Cylinder':
            addCylinder(name);
            break;
        case 'Ring':
            addRing(name);
            break;
        case 'Tube':
            addTube(name);
            break;
    }
}

renderer.setSize(width, height);

const renderLoop = () => {
    renderer.render(scene, camera);
    controls.update();
    window.requestAnimationFrame(renderLoop);
};

renderLoop();
