import './App.css';
import Camera from './components/assets/Camera';
import WorkDesk from './components/objects/WorkDesk';
import Home from './components/objects/Home';
import GarbageBin from './components/assets/GarbageBin';
import Cactus from './components/assets/Cactus';
import Freezer from './components/assets/Freezer';
import Oven from './components/assets/Oven';
import KitchenSink from './components/assets/KitchenSink';
import KitchenTable from './components/assets/KitchenTable';
import KitchenChair from './components/assets/KitchenChair';
import BlackRubberMat from './components/assets/BlackRubberMat';

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
      <Cactus position={"0 0 -6"} />
      <Freezer position={"0 0 -4"} />
      <Oven position={"0 0 -2"} />
      <KitchenSink position={"2 0 0"} />
      <BlackRubberMat position={"2 0 -2"} />
      <Home position={"0 2 0"} />
    </a-entity>
  );
}

export default App;
