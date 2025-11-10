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
