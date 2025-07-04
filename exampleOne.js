import * as THREE from 'three';

// scene
const scene = new THREE.Scene()

// group
const group = new THREE.Group()

// object/mesh
const geometry = new THREE.BoxGeometry(1,1,1) // <== default values if unspecified
const material = new THREE.MeshBasicMaterial({
    color: "#abc"
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z = 4

const geometryT = new THREE.BoxGeometry(1,1,1) // <== default values if unspecified
const materialT = new THREE.MeshBasicMaterial({
    color: "green"
})

const meshT = new THREE.Mesh(geometryT, materialT)
meshT.position.y = 2

group.add(mesh, meshT)
group.position.x = -1
scene.add(group)

// AxesHelper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

// camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const {width, height} = aspect
// arguments include fov(converted to degrees), aspect, near, far
const camera = new THREE.PerspectiveCamera(75,width / height, 1, 2000) // <== default near&&far values if unspecified
camera.position.z = 9
camera.position.x = 1
camera.position.y = -1

scene.add(camera)

// renderer
const canvas = document.getElementById("canvas"); //select the canvas element
const renderer = new THREE.WebGLRenderer({canvas}) // add WebGLRenerer
renderer.setSize(width, height) //renderer size

renderer.render(scene, camera) //display the scene as captured by the camera