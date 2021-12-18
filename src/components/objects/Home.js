import React from 'react';
import Walls from '../assets/Walls';
import Roof from '../assets/Roof';

const Home = (props) => {
    return (
        <a-entity {...props}>
            <Walls/>

            {/* Floor */}
            <a-plane width="40" height="40" src="#floor" repeat="20 20" rotation="-90 0 0" position="0 -1.99 0"></a-plane>
            <a-plane width="6" height="4" src="#floor" repeat="3 2" rotation="-90 0 0" position="23 -1.99 0"></a-plane>
            <a-plane width="10" height="10" src="#floor" repeat="5 5" rotation="-90 0 0" position="-25 -1.99 0"></a-plane>

            {/* Roof */}
            <Roof width={40} height={8} depth={40} x={0} z={0} y={2}></Roof>
            <Roof width={6} height={2} depth={4} x={23} z={0} y={2}></Roof>
            <Roof width={10} height={3} depth={10} x={-25} z={0} y={2}></Roof>
        </a-entity>
    );
};

export default Home;