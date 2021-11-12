import './App.css';
import Camera from './assets/Camera';
import RedBlueBox from './assets/RedBlueBox';

function App() {
  const handleClick = (e) => {
    console.log("Target", e.target);
    console.log("Clicked");
  }

  return (
    <a-scene>
      <Camera/>
      <RedBlueBox onClick={handleClick} width="2" depth="3" height="1" position="0 0 -5"/>
    </a-scene>
  );
}

export default App;
