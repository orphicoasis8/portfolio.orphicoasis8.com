// import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// import * as THREE from 'three';
// // import * as ObjectLoader from 'node_modules/three/src/loaders/ObjectLoader.js';

// import * as loader from 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/js/loaders/OBJLoader.js';

// @Component({
//   selector: 'app-maya',
//   templateUrl: './maya.component.html',
//   styleUrls: ['./maya.component.scss'],
// })
// export class MayaComponent implements AfterViewInit {
//   @ViewChild('threejsoutput')
//   threejsoutputref: ElementRef;

//   name = 'Angular';
//   scene: any;
//   camera: any;
//   renderer: any;
//   geometry: any;
//   material: any;
//   mesh: any;
//   texture: any;
//   loader: any;

//   ngAfterViewInit() {
//     this.init();
//     this.animate();
//   }

//   init() {
//     const width = this.threejsoutputref.nativeElement.offsetWidth;
//     const height = this.threejsoutputref.nativeElement.offsetWidth;
//     // this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

//     this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);

//     this.camera.position.z = 400;

//     this.scene = new THREE.Scene();

//     this.loader = new loader.OBJLoader();
//     // this.texture = new THREE.TextureLoader().load(
//     //   'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif'
//     // );

//     // this.geometry = new THREE.BoxGeometry(200, 200, 200);
//     // this.material = new THREE.MeshBasicMaterial({ map: this.texture });

//     // this.mesh = new THREE.Mesh(this.geometry, this.material);
//     // this.scene.add(this.mesh);

//     this.renderer = new THREE.WebGLRenderer({ antialias: true });
//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     // this.renderer.setSize(window.innerWidth, window.innerHeight);
//     this.renderer.setSize(width, height);

//     this.threejsoutputref.nativeElement.appendChild(this.renderer.domElement);
//   }

//   public animate() {
//     requestAnimationFrame(() => this.animate());
//     this.mesh.rotation.x += 0.005;
//     this.mesh.rotation.y += 0.01;
//     this.renderer.render(this.scene, this.camera);
//   }

//   public onResize(event) {
//     const width = this.threejsoutputref.nativeElement.offsetWidth;
//     const height = this.threejsoutputref.nativeElement.offsetWidth;

//     this.camera.aspect = width / height;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(width, height);
//   }
// }
