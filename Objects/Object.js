class Object {
    constructor(name, position, rotation, scale, material) {
        this.name = name;
        this.position = position || new THREE.Vector3(0, 0, 0);
        this.rotation = rotation || new THREE.Vector3(0, 0, 0);
        this.scale = scale || new THREE.Vector3(1, 1, 1);
        this.material = material || new THREE.MeshBasicMaterial({ color: 0xffffff });;
    }

    setPosition(x, y, z) {
        this.position.set(x, y, z);
    }

    setRotation(x, y, z) {
        this.rotation.set(x, y, z);
    }

    setScale(x, y, z) {
        this.scale.set(x, y, z);
    }
}