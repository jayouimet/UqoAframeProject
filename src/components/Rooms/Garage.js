import React from 'react';
import BlackRubberMat from '../assets/BlackRubberMat';
import Door from '../assets/Door';
import GarageShelf from '../assets/GarageShelf';
import GarbageBin from '../assets/GarbageBin';
import Wall from '../assets/Wall';
import ShelfOfPaint from '../objects/ShelfOfPaint';

const Garage = (props) => {
    return (
        <a-entity {...props}>
            <a-entity position="13 0 -11">
                <Wall width="14" depth="0.2" height="4" position="-6.5 0 -2" rotation="0 90 0" />
                <Wall width="13.5" depth="0.2" height="4" position="0.25 0 -9" />
                <Door position={"0.25 0 5"} wallWidth={13.5} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" />
                <Door position={"7 0 -2"} wallWidth={14} wallHeight={4} doorHeight={3} doorWidth={2} depth="0.2" rotation="0 90 0"/>

                <a-entity position="0 -2 0">
                    <GarageShelf position="-3.5 0 -8.2"/>
                    <ShelfOfPaint position="0.5 0 -8.2"/>
                    <ShelfOfPaint position="4.5 0 -8.2"/>
                    <GarbageBin position="6 0 4.2"/>
                    <BlackRubberMat position="5.8 0 -2" rotation="0 90 0"/>
                </a-entity>
            </a-entity>
        </a-entity>
    );
};

export default Garage;