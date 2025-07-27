const canvas = document.getElementById('scene');
const width = canvas.clientWidth, height = canvas.clientHeight, fov = 45;
let aspectRatio = width / height;

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
camera.position.set(-5, 3, 5);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

const gridHelper = new THREE.GridHelper(30, 30);
const axesHelper = new THREE.AxesHelper(10);

const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
const torusKnotMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0.76,
    roughness: 0.51,
    reflectivity: 0.58,
});
const torusKnotMesh = new THREE.Mesh(
    torusKnotGeometry,
    torusKnotMaterial
);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    torusKnotMaterial
);

cubeMesh.position.set(-2, 0, 0);

const light = new THREE.AmbientLight(0xffffff, 0.3);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);

scene.add(axesHelper);
scene.add(gridHelper);
scene.add(torusKnotMesh);
scene.add(cubeMesh);
scene.add(light);
scene.add(pointLight);
scene.add(camera);

renderer.setSize(width, height);

const renderLoop = () => {
    renderer.render(scene, camera);
    controls.update();
    window.requestAnimationFrame(renderLoop);
};

renderLoop();
