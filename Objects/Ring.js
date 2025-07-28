import { Object } from './Object.js';

export class Ring extends Object {
    constructor(name, position, rotation, scale, material) {
        super(name, position, rotation, scale, material);
        this.geometry = new THREE.RingGeometry(this.scale.x / 2, this.scale.y / 2, 32);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    }

    updateMesh() {
        this.mesh.geometry.dispose();
        this.mesh.geometry = new THREE.RingGeometry(this.scale.x / 2, this.scale.y / 2, 32);
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    }
}