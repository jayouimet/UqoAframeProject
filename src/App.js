import './App.css';
import Camera from './components/assets/Camera';
import WorkDesk from './components/objects/WorkDesk';

function App() {
  return (
    <a-scene>
      <a-entity position={"0 0 0"} scale={"2 1 2"} environment="
        playArea: 1;
        preset: forest; 
        groundColor: #445; 
        fog: 0.95; 
        ground: flat; 
        groundTexture: walkernoise; 
        shadow: true;
        "></a-entity>
      <Camera/>
      <WorkDesk position={"0 0 -5"}/>
    </a-scene>
  );
}

export default App;
