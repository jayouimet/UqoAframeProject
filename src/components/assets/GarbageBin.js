import React from 'react';

const GarbageBin = (props) => {
    return(
        <a-entity {...props}>
            <a-cone position="0 0.4 0" radius-top="0.4" radius-bottom="0.3" height=".8" color="#7E7E7E"></a-cone>
            <a-cone position="0 0.825 0" radius-top="0.4" radius-bottom="0.42" height=".05" color="#7E7E7E"></a-cone>
            <a-cone position="0 0.865 0" radius-top="0.3" radius-bottom="0.4" height=".03" color="#7E7E7E"></a-cone>

            <a-box rotation="0 0 -15" position="-0.1 0.9 0" height="0.05" depth="0.03" width="0.01" color="#7E7E7E"></a-box>
            <a-box rotation="0 0 15" position="0.1 0.9 0" height="0.05" depth="0.03" width="0.01" color="#7E7E7E"></a-box>
            <a-box position="0 0.925 0" height="0.01" depth="0.03" width="0.195" color="#7E7E7E"></a-box>
        </a-entity>
    );
};

export default GarbageBin;