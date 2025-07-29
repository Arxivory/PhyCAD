import { Object } from "./Object.js";

export class Torus extends Object {
    constructor(id, name, position, rotation, scale, material) {
        super(id, name, position, rotation, scale);
        this.geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        this.mesh = new THREE.Mesh(this.geometry, material);
        this.mesh.position.copy(position);
        this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        this.mesh.scale.set(scale.x, scale.y, scale.z);
    }

    updateMesh() {
        this.mesh.geometry.dispose();
        this.mesh.geometry = new THREE.RingGeometry(this.scale.x / 2, this.scale.y / 2, 32);
        this.mesh.position.copy(this.position);
        this.mesh.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    }
}