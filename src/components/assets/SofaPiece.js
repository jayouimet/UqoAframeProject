import React from 'react';

const SofaPiece = ({ width, height, depth, color, ...props }) => {
    if (color) {
        return (
            <a-box roughness="1" color={color} width={width} height={height} depth={depth} {...props}></a-box>
        );
    } else {
        return (
            <a-box roughness="1" src="#sofa" repeat={`${width} ${height}`} width={width} height={height} depth={depth} {...props}></a-box>
        );
    }
};

export default SofaPiece;