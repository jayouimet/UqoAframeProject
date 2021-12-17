import React from 'react';

const GarageShelf = (props) => {
    return (
        <a-entity {...props}>
            <a-cylinder position="-1.45 1 -0.45" height="2" radius="0.05" color="#2A9DF4"></a-cylinder>
            <a-cylinder position="-1.45 1 0.45" height="2" radius="0.05" color="#2A9DF4"></a-cylinder>
            <a-cylinder position="1.45 1 -0.45" height="2" radius="0.05" color="#2A9DF4"></a-cylinder>
            <a-cylinder position="1.45 1 0.45" height="2" radius="0.05" color="#2A9DF4"></a-cylinder>
            <a-entity position="0 1.955 0" geometry="primitive: box; height: 0.1; depth: 1; width: 3;" material="color: #C19A6B"></a-entity>
            <a-entity position="0 1 0" geometry="primitive: box; height: 0.1; depth: 1; width: 3;" material="color: #C19A6B"></a-entity>
            <a-entity position="0 0.045 0" geometry="primitive: box; height: 0.1; depth: 1; width: 3;" material="color: #C19A6B"></a-entity>
        </a-entity>
    );
};

export default GarageShelf;