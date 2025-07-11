import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.PlaneGeometry(1, 1)
// const geometry = new THREE.BufferGeometry()
// const vertices = new Float32Array([
//     0,0,0,
//     0,1,0,
//     1,0,0
// ])
// geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
const material = new THREE.MeshBasicMaterial({ color: "purple", wireframe: true })
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

// Clock
const clock = new THREE.Clock()

function animate() {
    const elapsedTime = clock.getElapsedTime()
    // Update rotation on Y-Axis
    mesh.rotation.y = elapsedTime
    // Update rotation on X-Axis
    mesh.rotation.x = elapsedTime
    // Renderer
    renderer.render(scene, camera)
    // RequestAnimationFrame
    window.requestAnimationFrame(animate)
}

animate()