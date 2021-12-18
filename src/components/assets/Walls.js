import React from 'react';
import Door from './Door';
import Wall from './Wall';
import Window from './Window';

const Walls = (props) => {
    return (
        <a-entity {...props}>
            {/* External Walls */}
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 12.5" />
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 -12.5" />
            <Window position={"20 0 13"} rotation="0 90 0" wallWidth={14} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"20 0 4"} rotation="0 90 0" wallWidth={4} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"20 0 -4"} rotation="0 90 0" wallWidth={4} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window rotation="0 180 0" position={"-1.75 0 -20"} wallWidth={16.5} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>

            {/* Bathroom Walls */}
            <Wall width="10" depth="0.2" height="4" position="-25 0 5" />
            <Wall width="10" depth="0.2" height="4" position="-25 0 -5" />
            <Window position="-30 0 0" wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2} rotation="0 -90 0"/>
            {/* Door */}
            <Door position={"-20 0 0"} rotation="0 90 0" wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Entree Walls */}
            <Wall width="6" depth="0.2" height="4" position="23 0 2" />
            <Wall width="6" depth="0.2" height="4" position="23 0 -2" />
            {/* Doors */}
            <Door position={"26 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            <Door position={"20 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Interior Walls */}

            {/* R1 Walls */}
            <a-entity position="-15 0 -12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0" />
                <Door position={"0 0 7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Window rotation="0 180 0" position={"0 0 -7.5"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth="0.2" />
            </a-entity>

            {/* R2 Walls */}
            <a-entity position="-15 0 12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0" />
                <Door position={"0 0 -7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Window position={"0 0 7.5"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth="0.2" />
            </a-entity>

            {/* Living room Wall */}
            <a-entity position="13 0 11">
                <Wall width="12" depth="0.2" height="1.5" position="1 -1.25 -5" />
            </a-entity>
            <Window position={"-5 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"5 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"15 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>

            {/* Garage Walls */}
            <a-entity position="13 0 -11">
                <Wall width="14" depth="0.2" height="4" position="-6.5 0 -2" rotation="0 90 0" />
                <Wall width="13.5" depth="0.2" height="4" position="0.25 0 -9" />
                <Door position={"0.25 0 5"} wallWidth={13.5} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Door position={"7 0 -2"} wallWidth={14} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" rotation="0 90 0"/>
            </a-entity>
        </a-entity>
    );
};

export default Walls;