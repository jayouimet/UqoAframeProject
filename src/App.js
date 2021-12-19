import './App.css';
import Camera from './components/assets/Camera';
import ShelfOfPaint from './components/objects/ShelfOfPaint';
import WorkDesk from './components/objects/WorkDesk';
import Home from './components/objects/Home';
import DoorTexture from "./textures/door.png";
import Door1Texture from "./textures/door1.png";
import FloorTexture from "./textures/floor.jpg";
import WallTexture from "./textures/wall.jpg";
import CeilingTexture from "./textures/ceiling.jpg";
import RoofTexture from "./textures/roof.png";
import BlindsTexture from "./textures/blinds.jpg";

function App() {
  return (
    <a-scene>
      <a-assets defaultLightning="false">
        <img src={DoorTexture} id="door" alt="door"/>
        <img src={Door1Texture} id="door1" alt="door1"/>
        <img width="1" height="1" src={FloorTexture} id="floor" alt="floor"/>
        <img width="1" height="1" src={WallTexture} id="wall" alt="wall"/>
        <img width="1" height="1" src={CeilingTexture} id="ceiling" alt="ceiling"/>
        <img width="1" height="1" src={RoofTexture} id="roof" alt="roof"/>
        <img width="1" height="1" src={BlindsTexture} id="blinds" alt="blinds"/>
      </a-assets>
      
      <a-entity position={"0 0 0"} scale={"2 1 2"} environment="
        playArea: 1;
        preset: forest; 
        groundColor: #445; 
        ground: flat; 
        groundTexture: walkernoise; 
        shadow: true;
        lightPosition:0 15 0;
        flatShading:true;
        "></a-entity>
      <Camera/>
      <ShelfOfPaint position={"0 0 -12"}/>
      <WorkDesk position={"0 0 -10"}/>
      <Home position={"0 2 0"}/>
    </a-scene>
  );
}

export default App;
