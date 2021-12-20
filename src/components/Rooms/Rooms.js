import React from 'react';
import Bathroom from './Bathroom';
import Door from '../assets/Door';
import Garage from './Garage';
import LivingRoom from './LivingRoom';
import RoomOne from './RoomOne';
import RoomTwo from './RoomTwo';
import Wall from '../assets/Wall';
import Window from '../assets/Window';
import BlackRubberMat from '../assets/BlackRubberMat';
import KitchenCounter from '../assets/KitchenCounter';
import KitchenSink from '../assets/KitchenSink';
import Freezer from '../assets/Freezer';
import Oven from '../assets/Oven';
import GarbageBin from '../assets/GarbageBin';
import KitchenTable from '../assets/KitchenTable';
import KitchenChair from '../assets/KitchenChair';

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
            <a-entity scale={"1 1.3 1"} position={"0.3 -2 0"}>
                <KitchenSink position={"-9.45 0 -19.5"}/>
                <KitchenCounter position={"-8.4 0 -19.5"}/>
                <KitchenCounter position={"-7.35 0 -19.5"}/>
                <KitchenCounter position={"-6.3 0 -19.5"}/>
                <KitchenCounter position={"-5.25 0 -19.5"}/>
                <KitchenCounter position={"-4.2 0 -19.5"}/>
                <KitchenCounter position={"-3.15 0 -19.5"}/>
                <KitchenSink position={"-2.1 0 -19.5"}/>
                <KitchenCounter position={"-1.05 0 -19.5"}/>
                <KitchenCounter position={"0 0 -19.5"}/>
                <KitchenCounter position={"1.05 0 -19.5"}/>
                <KitchenCounter position={"2.1 0 -19.5"}/>
                <KitchenCounter position={"3.15 0 -19.5"}/>
                <KitchenCounter position={"4.2 0 -19.5"}/>
                <KitchenSink position={"5.25 0 -19.5"}/>
            </a-entity>

            <a-entity scale={"1 1.3 1"} position={"0.3 0.7 0"}>
                <KitchenCounter top position={"-9.45 0 -19.5"}/>
                <KitchenCounter top position={"-8.4 0 -19.5"}/>
                <KitchenCounter top position={"-7.35 0 -19.5"}/>
                <KitchenCounter top position={"-6.3 0 -19.5"}/>
                <KitchenCounter top position={"-5.25 0 -19.5"}/>
                <KitchenCounter top position={"-4.2 0 -19.5"}/>
                <KitchenCounter top position={"0 0 -19.5"}/>
                <KitchenCounter top position={"1.05 0 -19.5"}/>
                <KitchenCounter top position={"2.1 0 -19.5"}/>
                <KitchenCounter top position={"3.15 0 -19.5"}/>
                <KitchenCounter top position={"4.2 0 -19.5"}/>
                <KitchenCounter top position={"5.25 0 -19.5"}/>
            </a-entity>

            <a-entity rotation={"0 90 0"} position={"-9.2 -2 -15"}>
                <Freezer scale={"1.3 1.3 1.3"}/>
                <KitchenCounter scale={"1 1.3 1.5"} position={"-1.2 0 -0.05"}/>
                <KitchenCounter scale={"1 1.3 1.5"} position={"-2.25 0 -0.05"}/>
                <Oven scale={"1.3 1.3 1.3"} position={"-3.575 0 0"}/>
                <KitchenCounter scale={"1 1.3 1.5"} position={"-4.9 0 -0.05"}/>
                <KitchenCounter scale={"1 1.3 1.5"} position={"-5.95 0 -0.05"}/>
                <GarbageBin scale={"1.3 1.3 1.3"} position={"-7.2 0 0"}/>
            </a-entity>

            <a-entity scale={"1.3 1.3 1.3"} position={"-1.8 -2 -10"}>
                <KitchenTable position={"-1.655 0 0"}/>
                <KitchenTable position={"1.655 0 0"}/>
                
                <a-entity rotation={"0 180 0"}>
                    <KitchenChair position={"0.8275 0 0.7"}/>
                    <KitchenChair position={"1.655 0 0.7"}/>
                    <KitchenChair position={"2.4825 0 0.7"}/>
                    <KitchenChair position={"-0.8275 0 0.7"}/>
                    <KitchenChair position={"-1.655 0 0.7"}/>
                    <KitchenChair position={"-2.4825 0 0.7"}/>
                </a-entity>

                <KitchenChair position={"0.8275 0 0.7"}/>
                <KitchenChair position={"1.655 0 0.7"}/>
                <KitchenChair position={"2.4825 0 0.7"}/>
                <KitchenChair position={"-0.8275 0 0.7"}/>
                <KitchenChair position={"-1.655 0 0.7"}/>
                <KitchenChair position={"-2.4825 0 0.7"}/>
            </a-entity>

            <Bathroom/>
            {/* Door */}
            <Door position={"-20 0 0"} rotation="0 90 0" wallWidth={10} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />

            {/* Entree Walls */}
            <Wall width="6" depth="0.2" height="4" position="23 0 2" />
            <Wall width="6" depth="0.2" height="4" position="23 0 -2" />
            {/* Doors */}
            <Door position={"26 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            <Door position={"20 0 0"} rotation="0 90 0" wallWidth={4} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
            <a-entity position={"0 -2 0"}>
                <BlackRubberMat rotation={"0 90 0"} position={"19 0 0"}/>
                <BlackRubberMat rotation={"0 90 0"} position={"25 0 0"}/>
            </a-entity>

            <RoomOne/>
            <RoomTwo/>
            <LivingRoom/>
            <Garage/>
        </a-entity>
    );
};

export default Rooms;