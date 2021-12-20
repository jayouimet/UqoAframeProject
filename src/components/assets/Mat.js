import React from 'react';

const Mat = (props) => {
    return(
        <a-entity {...props}>
            <a-box position="-2 0.05 0" width="0.1" height="0.03" depth="3.1" color="#CFB284"></a-box>
            <a-box position="2 0.05 0" width="0.1" height="0.03" depth="3.1" color="#CFB284"></a-box>
            <a-box position="0 0.05 1.5" width="4.1" height="0.03" depth="0.1" color="#CFB284"></a-box>
            <a-box position="0 0.05 -1.5" width="4.1" height="0.03" depth="0.1" color="#CFB284"></a-box>
            <a-plane position="0 0.05 0" rotation="-90 0 0" width="4" height="3" src="#matTexture"></a-plane>
        </a-entity>
    );
};

export default Mat;