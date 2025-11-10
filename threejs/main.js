import * as THREE from "three";

console.log("Starting Three.js...");

/* SET UP SCENE */
console.log("Setting up scene...");
// A scene is a container that will hold all the objects
// It is like a canvas in WebGL
// But in WebGL, we need to create a canvas element and get the context of the canvas to start drawing
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a26); // Set the background color of the scene to a dark gray (equivalent to gl.clearColor(0.1, 0.1, 0.15, 1.0) in WebGL)

console.log("Scene created successfully !");

/* SET UP CAMERA */
console.log("Setting up camera...");

// A camera is a device that will capture the scene and project it onto the screen
// OrthographicCamera is a camera that will project the scene onto a 2D plane
const camera = new THREE.OrthographicCamera(
  -1,
  1, // Left, right (width of the viewport)
  1,
  -1, // Top, bottom (height of the viewport)
  0.1,
  10 // Near, far (depth of the viewport)
);

camera.position.z = 1; // Set the position of the camera to the front of the scene

console.log("Camera created successfully !");

/* SET UP RENDERER */
console.log("Setting up renderer...");

// A renderer is a device that will render the scene and project it onto the screen
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#threejs-canvas"),
  antialias: true, // Enable anti-aliasing to smooth the edges of the shapes
});

renderer.setSize(600, 600); // Set the size of the renderer to the size of the canvas

console.log("Renderer created successfully !");

/* SET UP GEOMETRY */
console.log("Setting up geometry...");

// A geometry is a shape that will be rendered on the screen
// BufferGeometry is a geometry that will store the vertices data in the GPU memory
// In WebGL, we need to create a buffer object and send the vertices data to the buffer object
const geometry = new THREE.BufferGeometry(); // Create a new geometry object

// Define the vertices of the triangle
// Exactly the same as the vertices data in WebGL
const positions = new Float32Array([
  -0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.0, 0.5, 0.0,
]);

// Set the positions attribute to the geometry
geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
  // 3 is the number of components per attribute (x, y, z)
); // Create a new buffer attribute object and set the positions attribute to the geometry

// Define the colors of the vertices
const colors = new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);

// Set the colors attribute to the geometry
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

console.log("Geometry created successfully !");

/* SET UP MATERIAL */
console.log("Setting up material...");

// A material is a object that will be used to color the geometry
// MeshBasicMaterial is a material that will color the geometry with a single color without any lighting
const material = new THREE.MeshBasicMaterial({
  vertexColors: true, // Use the colors of the vertices to color the mesh
});

console.log("Material created successfully !");

/* SET UP MESH */
console.log("Setting up mesh...");

const triangle = new THREE.Mesh(geometry, material); // Create a new mesh object

scene.add(triangle); // Add the mesh to the scene

console.log("Mesh created successfully !");

function render() {
  renderer.render(scene, camera);
}

render();