import React from 'react';
import Wall from '../assets/Wall';
import Window from '../assets/Window';

const LivingRoom = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="13 0 11">
                <Wall width="12" depth="0.2" height="1.5" position="1 -1.25 -5" />
            </a-entity>
            <Window position={"-5 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"5 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
            <Window position={"15 0 20"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth={0.2}/>
        </a-entity>
    );
};

export default LivingRoom;