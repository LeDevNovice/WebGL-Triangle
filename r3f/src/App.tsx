import { Canvas } from "@react-three/fiber"
import { useRef } from "react"

/* SET UP VERTEX DATA */
// Exactly the same as the vertices data in WebGL
const positions = new Float32Array([
  -0.5, -0.5, 0.0,  // Vertex 1 : Bas-Gauche
   0.5, -0.5, 0.0,  // Vertex 2 : Bas-Droite
   0.0,  0.5, 0.0   // Vertex 3 : Haut-Centre
]);

const colors = new Float32Array([
  1.0, 0.0, 0.0,  // Rouge
  0.0, 1.0, 0.0,  // Vert
  0.0, 0.0, 1.0   // Bleu
]);

function App() {
  /* SET UP MESH */
  // A mesh is a 3D object that will be rendered on the screen
  // It is composed of a geometry and a material
  // The geometry is the shape of the mesh
  // The material is the color of the mesh
  const meshRef = useRef(null); // A ref is a way to store a reference to the mesh. It is a way to access the mesh in the component.

  /* RENDER */
  return (
    <div>
      {/* A canvas is a 2D or 3D surface that will be rendered on the screen */}
      <Canvas 
        /* SET UP CAMERA */
        // A camera is a device that will capture the scene and project it onto the screen
        // OrthographicCamera is a camera that will project the scene onto a 2D plane
        camera={{
          position: [0, 0, 1], // Position of the camera in the scene (x, y, z)
          left: -1, // Left boundary of the viewport
          right: 1, // Right boundary of the viewport
          top: 1, // Top boundary of the viewport
          bottom: -1, // Bottom boundary of the viewport
          near: 0.1, // Near plane of the viewport
          far: 10, // Far plane of the viewport
        }}
        orthographic // Set the camera to an orthographic projection
        style={{ width: '600px', height: '600px' }}
      >
        {/* Set the background color of the scene */}
        <color attach="background" args={['#1a1a26']} />
        <mesh ref={meshRef}>
          {/* Set the geometry of the mesh */}
          <bufferGeometry>
            {/* Set the positions of the vertices */}
            <bufferAttribute attach="attributes-position" count={3} itemSize={3} array={positions} />
            {/* Set the colors of the vertices */}
            <bufferAttribute attach="attributes-color" count={3} itemSize={3} array={colors} />
          </bufferGeometry>
          {/* Set the material of the mesh */}
          <meshBasicMaterial vertexColors />
        </mesh>
      </Canvas>
      
    </div>
  )
}

export default App
