import { Object } from './Object.js';

export class Cube extends Object {
    constructor(id, name, position, rotation, scale, material) {
        super(id, name, position, rotation, scale, material);
        this.geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    }

    updateMesh() {
        this.mesh.geometry.dispose();
        this.mesh.geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z);
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    }
}