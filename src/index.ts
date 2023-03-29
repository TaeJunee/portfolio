import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas') as HTMLElement,
  antialias: true
})
renderer.outputEncoding = THREE.sRGBEncoding
const camera = new THREE.PerspectiveCamera(30, 1)
camera.position.set(0, 0, 10)
const loader = new GLTFLoader()
loader.load('/src/assets/models/shiba/scene.gltf', (shiba) => {
  console.log('hi')
  scene.add(shiba.scene)
  renderer.render(scene, camera)
})
