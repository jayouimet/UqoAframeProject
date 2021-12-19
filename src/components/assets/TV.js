import React from 'react';

const TV = (props) => {
    return (
        <a-entity {...props}>
            <a-box roughness="1" width="3" height="1.75" depth="0.2" color="black"></a-box>
            <a-cylinder position="-1.3 -0.9 0" radius="0.05" height="0.1" color="white"></a-cylinder>
            <a-cylinder position="1.3 -0.9 0" radius="0.05" height="0.1" color="white"></a-cylinder>
            <a-video shader="flat" side="double" position="0 0 0.11" src="#tv" width="2.7" height="1.55"></a-video>
        </a-entity>
    );
};

export default TV;