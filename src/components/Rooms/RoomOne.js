import React from 'react';
import Bed from '../assets/Bed';
import Door from '../assets/Door';
import Wall from '../assets/Wall';
import Window from '../assets/Window';
import WorkDesk from '../objects/WorkDesk';

const RoomOne = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="-15 0 -12.5">
                <Wall width="15" depth="0.2" height="4" position="5 0 0" rotation="0 90 0" />
                <Door position={"0 0 7.5"} wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Window position={"0 0 -7.5"} wallWidth={10} wallHeight={4} windowHeight={1.6} windowWidth={3} depth="0.2" />

                <a-entity position={"0 -2 0"}>
                    <Bed position={"-3.5 0 -5.2"} rotation={"0 180 0"} scale={"0.8 0.8 0.8"}/>
                    <Bed position={"3.5 0 -5.2"} rotation={"0 180 0"} scale={"0.8 0.8 0.8"}/>
                    <WorkDesk position={"-4.1 0 0"} rotation={"0 90 0"} scale={"1.3 1.3 1.3"}/>
                    <WorkDesk position={"-4.1 0 4.5"} rotation={"0 90 0"} scale={"1.3 1.3 1.3"}/>
                </a-entity>
            </a-entity>
        </a-entity>
    );
};

export default RoomOne;