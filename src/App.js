import './App.css';
import Camera from './components/assets/Camera';
import ShelfOfPaint from './components/objects/ShelfOfPaint';
import WorkDesk from './components/objects/WorkDesk';
import Home from './components/objects/Home';
import DoorTexture from "./textures/door.png";
import FloorTexture from "./textures/floor.jpg";
import WallTexture from "./textures/wall.jpg";

function App() {
  return (
    <a-scene>
      <a-assets>
        <img src={DoorTexture} id="door" alt="door"/>
        <img width="1" height="1" src={FloorTexture} id="floor" alt="floor"/>
        <img width="1" height="1" src={WallTexture} id="wall" alt="wall"/>
      </a-assets>
      <a-entity position={"0 0 0"} scale={"2 1 2"} environment="
        playArea: 1;
        preset: forest; 
        groundColor: #445; 
        fog: 0.85; 
        ground: flat; 
        groundTexture: walkernoise; 
        shadow: true;
        "></a-entity>
      <Camera/>
      <ShelfOfPaint position={"0 0 -12"}/>
      <WorkDesk position={"0 0 -10"}/>
      <Home position={"0 2 0"}/>
    </a-scene>
  );
}

export default App;
