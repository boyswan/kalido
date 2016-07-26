import Mesh from 'objects/common/mesh'
import material from 'materials/move'
import { createBufferGeom } from 'helpers/utils'
import { App } from 'app'

export default class Kalido extends Mesh {
  constructor() {
    super()

    this.geom = new THREE.Geometry();

    this.geom.vertices.push(new THREE.Vector3( 0.0, 1.0, 0.0))
    this.geom.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0))
    this.geom.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0))

    this.geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    this.geom.computeFaceNormals();

    for ( var i = 1; i <= 120; i ++ ) {
      this.len = i
      this.mesh = new THREE.Mesh( this.geom, new THREE.MeshNormalMaterial({ wireframe: true, side: THREE.DoubleSide }) );
      this.mesh.name = `tri`
      // mesh.geometry.translate( i * 0.001, 0, 0 );
      this.mesh.rotation.y =  33 * i;
      this.mesh.rotation.z =  33 * i;
      this.mesh.rotation.x =  33 * i;
      App.scene.add(this.mesh)
    }


    // console.log(input)

    // this.tri = 1000 * 3 * 3;
    // this.colors = new Uint8Array(this.tri);
    // this.vertices = new Float32Array(this.tri);
    //
    // for ( let i = 0; i < this.tri; i += 1 ) { this.vertices[i] = Math.random() - 0.5 }
    // for ( let i = 0; i < this.tri; i += 9) { this.colors[i] = 155 }
    //
    // this.mesh = new THREE.Mesh(createBufferGeom({
    //   position: [this.vertices, 3],
    //   color: [this.colors, 3, true]
    // }), material())




  }

  update({ interval, pulseValue, rotate }) {

    // App.scene.traverse(object => {
    //
    //   if (object.name === 'tri') {
    //     object.rotation.y = pulseValue * 0.001
    //     object.rotation.z = pulseValue * 0.001
    //     object.rotation.x = pulseValue * 0.001
    //   }
    // });

    // this.rotate(-rotate, rotate)
    // this.scale(pulseValue * 0.001, pulseValue * 0.001)
    // this.uniforms().mouse.value.set(pulseValue, pulseValue)
    // this.uniforms().time.value = interval * 0.1;
  }
}
