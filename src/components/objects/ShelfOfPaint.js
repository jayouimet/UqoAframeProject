import React from 'react';
import GarageShelf from '../assets/GarageShelf';
import Screwdriver from '../assets/Screwdriver';
import SprayPaint from '../assets/SprayPaint';

const ShelfOfPaint = (props) => {
    return (
        <a-entity {...props}>
            <GarageShelf/>
            <SprayPaint color="cornflowerblue" position={"0.5 1 0.2"}/>
            <SprayPaint color="orange" position={"1.1 1 -0.3"}/>
            <SprayPaint color="green" position={"-1.3 1 0.18"}/>
            <SprayPaint color="pink" position={"-0.5 1 -0.3"}/>
            <SprayPaint color="gold" position={"1.3 1 0.4"}/>
            <SprayPaint position={"0 1 0"}/>
            <SprayPaint color="blue" position={"0 1 0"}/>
            <SprayPaint color="green" position={"-1 1 0.2"}/>
            <SprayPaint color="black" position={"-0.8 1 -0.3"}/>
            <SprayPaint color="gray" position={"0.3 1 0"}/>

            <SprayPaint color="cornflowerblue" position={"0.5 1.95 0.2"}/>
            <SprayPaint color="orange" position={"1.1 1.95 -0.3"}/>
            <SprayPaint color="green" position={"-1.3 1.95 0.18"}/>
            <SprayPaint color="pink" position={"-0.5 1.95 -0.3"}/>
            <SprayPaint color="gold" position={"1.3 1.95 0.4"}/>
            <SprayPaint color="chartreuse" position={"0.8 1.95 0"}/>
            <SprayPaint color="yellow" position={"0.25 1.95 -0.25"}/>
            <SprayPaint color="green" position={"-0.8 1.95 0.2"}/>
            <SprayPaint color="purple" position={"-1.4 1.95 -0.3"}/>
            <SprayPaint color="lightpink" position={"0.3 1.95 0"}/>

            <SprayPaint color="chartreuse" position={"0.8 0.05 0"}/>
            <SprayPaint color="yellow" position={"0.25 0.05 -0.25"}/>
            <SprayPaint color="green" position={"-1.2 0.05 0.2"}/>
            <SprayPaint color="purple" position={"-1.4 0.05 -0.3"}/>
            <SprayPaint color="lightpink" position={"0.3 0.05 0"}/>
            <SprayPaint position={"0 0.05 0"}/>
            <SprayPaint color="blue" position={"0 0.05 0"}/>
            <SprayPaint color="red" position={"1 0.05 -0.25"}/>
            <SprayPaint color="green" position={"-1.2 0.05 0.2"}/>
            <SprayPaint color="black" position={"-0.8 0.05 -0.3"}/>
            <SprayPaint color="gray" position={"0.3 0.05 0"}/>

            <Screwdriver position={"0.3 1.07 0.3"}/>
        </a-entity>
    );
};

export default ShelfOfPaint;