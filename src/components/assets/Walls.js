import React from 'react';
import Door from './Door';
import Wall from './Wall';

const Walls = (props) => {
    return (
        <a-entity {...props}>
            {/* External Walls */}
            <Wall width="40" depth="0.2" height="4" position="0 0 20"/>
            <Wall width="40" depth="0.2" height="4" position="0 0 -20"/>
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 12.5"/>
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 -12.5"/>
            <Wall width="18" depth="0.2" height="4" rotation="0 90 0" position="20 0 11"/>
            <Wall width="18" depth="0.2" height="4" rotation="0 90 0" position="20 0 -11"/>

            {/* Bathroom Walls */}
            <Wall width="10" depth="0.2" height="4" position="-25 0 5"/>
            <Wall width="10" depth="0.2" height="4" position="-25 0 -5"/>
            <Wall width="10" depth="0.2" height="4" rotation="0 90 0" position="-30 0 0"/>
            {/* Door */}
            <Door position={"-20 0 0"} rotation="0 90 0" wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Entree Walls */}
            <Wall width="6" depth="0.2" height="4" position="23 0 2"/>
            <Wall width="6" depth="0.2" height="4" position="23 0 -2"/>
            {/* Doors */}
            <Door position={"26 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            <Door position={"20 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Interior Walls */}

            {/* R1 Walls */}
            <a-entity position="-15 0 -12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0"/>
                <Door position={"0 0 7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            </a-entity>

            {/* R2 Walls */}
            <a-entity position="-15 0 12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0"/>
                <Door position={"0 0 -7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            </a-entity>

            {/* Living room Wall */}
            <a-entity position="13 0 11">
                <Wall width="12" depth="0.2" height="4" position="1 0 -5"/>
            </a-entity>

            {/* Garage Walls */}
            <a-entity position="13 0 -11">
                <Wall width="14" depth="0.2" height="4" position="-6.5 0 -2" rotation="0 90 0"/>
                <Door position={"0.25 0 5"} wallWidth={13.5} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            </a-entity>

            {/* Ground */}
            <a-plane width="40" height="40" src="#floor" repeat="20 20" rotation="-90 0 0" position="0 -1.99 0"></a-plane>
            <a-plane width="6" height="4" src="#floor" repeat="3 2" rotation="-90 0 0" position="23 -1.99 0"></a-plane>
            <a-plane width="10" height="10" src="#floor" repeat="5 5" rotation="-90 0 0" position="-25 -1.99 0"></a-plane>
        </a-entity>
    );
};

export default Walls;