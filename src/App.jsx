import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <Experience></Experience>
        </Canvas>
      </div>
    </>
  );
}

export default App;
