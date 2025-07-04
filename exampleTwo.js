import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "purple" })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height)

camera.position.z = 3

scene.add(camera)

const canvas = document.getElementById("canvas")
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(aspect.width, aspect.height)


function animate() {
    mesh.rotation.y += 0.01
    mesh.rotation.x += 0.01
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

animate()