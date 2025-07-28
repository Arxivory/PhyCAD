const canvases = document.querySelectorAll('.material-preview-canvas');

canvases.forEach(canvas => {
    let scene, camera, renderer;
    const width = canvas.clientWidth, height = canvas.clientHeight;
    const fov = 45;
    let aspectRatio = width / height;

    function initMaterialPreview() {
        scene = new THREE.Scene();
        scene.background = null;

        camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
        camera.position.set(0, 0, 5.5);

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        })
    }

    function createMaterialPreview() {
        const geometry = new THREE.SphereGeometry(1, 32, 32);

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.76,
            roughness: 0.51,
            reflectivity: 0.58
        });

        const mesh = new THREE.Mesh(
            geometry,
            material
        );

        mesh.position.set(0, 0, 2);

        const light = new THREE.AmbientLight(0xffffff, 0.6);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);

        scene.add(mesh);
        scene.add(light);
        scene.add(pointLight);
        scene.add(camera);
    }

    function renderMaterialPreview() {
        renderer.setSize(width, height);
        renderer.render(scene, camera);
    }

    initMaterialPreview();
    createMaterialPreview();
    renderMaterialPreview();
})



