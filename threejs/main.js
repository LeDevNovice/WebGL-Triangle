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
})

renderer.setSize(600, 600); // Set the size of the renderer to the size of the canvas
