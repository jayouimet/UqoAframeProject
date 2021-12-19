import React from 'react';

const BlackRubberMat = (props) => {
    return(
        <a-entity {...props}>
            <a-box position="-1 0.05 0" width="0.1" height="0.03" depth="1.6" color="black"></a-box>
            <a-box position="1 0.05 0" width="0.1" height="0.03" depth="1.6" color="black"></a-box>
            <a-box position="0 0.05 0.75" width="2.1" height="0.03" depth="0.1" color="black"></a-box>
            <a-box position="0 0.05 -0.75" width="2.1" height="0.03" depth="0.1" color="black"></a-box>
            <a-plane position="0 0.05 0" rotation="-90 0 0" width="2" height="1.5" src="#blackRubberMat"></a-plane>
        </a-entity>
    );
};

export default BlackRubberMat;