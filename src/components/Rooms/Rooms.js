import React from 'react';
import Bathroom from './Bathroom';
import Door from '../assets/Door';
import Garage from './Garage';
import LivingRoom from './LivingRoom';
import RoomOne from './RoomOne';
import RoomTwo from './RoomTwo';
import Wall from '../assets/Wall';
import Window from '../assets/Window';

const Rooms = (props) => {
    return (
        <a-entity {...props}>
            {/* External Walls */}
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 12.5" />
            <Wall width="15" depth="0.2" height="4" rotation="0 90 0" position="-20 0 -12.5" />
            <Window position={"20 0 13"} rotation="0 90 0" wallWidth={14} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"20 0 4"} rotation="0 90 0" wallWidth={4} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"20 0 -4"} rotation="0 90 0" wallWidth={4} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window rotation="0 180 0" position={"-1.75 0 -20"} wallWidth={16.5} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>

            <Bathroom/>
            {/* Door */}
            <Door position={"-20 0 0"} rotation="0 90 0" wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Entree Walls */}
            <Wall width="6" depth="0.2" height="4" position="23 0 2" />
            <Wall width="6" depth="0.2" height="4" position="23 0 -2" />
            {/* Doors */}
            <Door position={"26 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            <Door position={"20 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            <RoomOne/>
            <RoomTwo/>
            <LivingRoom/>
            <Garage/>
        </a-entity>
    );
};

export default Rooms;