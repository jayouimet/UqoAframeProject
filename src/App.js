import './App.css';
import Camera from './components/assets/Camera';
import Home from './components/objects/Home';

function App() {
  return (
    <a-entity>
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
      <Camera />
      <Home position={"0 2 0"} />
    </a-entity>
  );
}

export default App;
