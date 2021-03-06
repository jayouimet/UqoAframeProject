import React from 'react';
import Rooms from '../Rooms/Rooms';
import Roof from '../assets/Roof';
import LightController from '../objects/LightController';
import CeilingFan from '../assets/CeilingFan';

const Home = (props) => {
    return (
        <a-entity {...props}>
            <Rooms/>
            <LightController groupName={"cook"} position="0 1.99 10" buttonPos="19.9 0 1.5" rotation="0 -90 0"/>
            <LightController groupName={"cook"} position="0 1.99 -10" buttonOff="true"/>
            <LightController groupName={"cook"} position="10 1.99 0" buttonOff="true"/>
            <LightController groupName={"cook"} position="-10 1.99 0" buttonOff="true"/>
            <LightController groupName={"r1"} position="-15 1.99 -13" buttonPos="-13.5 0 -5.1" rotation="0 180 0"/>
            <LightController groupName={"r2"} position="-15 1.99 13" buttonPos="-13.5 0 5.1"/>
            <LightController groupName={"bath"} position="-25 1.99 0" buttonPos="-20.1 0 -1.5" rotation="0 -90 0"/>
            <LightController groupName={"garage"} position="13 1.99 -13" buttonPos="15 0 -6.1" rotation="0 180 0"/>
            <LightController groupName={"entrance"} position="23 1.99 0" buttonOff="true"/>

            <CeilingFan scale="1.8 1.8 1.8" position={"0 2 0"}/>

            {/* Floor */}
            <a-plane class="static-body" roughness="1" width="40" height="40" src="#floor" repeat="20 20" rotation="-90 0 0" position="0 -1.99 0"></a-plane>
            <a-plane class="static-body" width="6" height="4" src="#floor" repeat="3 2" rotation="-90 0 0" position="23 -1.99 0"></a-plane>
            <a-plane class="static-body" width="10" height="10" src="#floor" repeat="5 5" rotation="-90 0 0" position="-25 -1.99 0"></a-plane>

            {/* Roof */}
            <Roof width={40} height={8} depth={40} x={0} z={0} y={2}></Roof>
            <Roof width={6} height={2} depth={4} x={23} z={0} y={2}></Roof>
            <Roof width={10} height={3} depth={10} x={-25} z={0} y={2}></Roof>
        </a-entity>
    );
};

export default Home;