import React from 'react';
import SofaPiece from './SofaPiece';

const Sofa = (props) => {
    return(
        <a-entity {...props}>
            <SofaPiece width="3" height="0.2" depth="1.5" color="red"/>
            <a-box height="0.2" depth="0.1" width="0.1" color="black" position="-1.4 -0.2 -0.7"></a-box>
            <a-box height="0.2" depth="0.1" width="0.1" color="black" position="-1.4 -0.2 0.7"></a-box>
            <a-box height="0.2" depth="0.1" width="0.1" color="black" position="1.4 -0.2 -0.7"></a-box>
            <a-box height="0.2" depth="0.1" width="0.1" color="black" position="1.4 -0.2 0.7"></a-box>

            <SofaPiece width="0.25" height="0.8" depth="1.5" color="dimgrey" position="-1.375 0.5 0"/>
            <SofaPiece width="0.25" height="0.8" depth="1.5" color="dimgrey" position="1.375 0.5 0"/>
            <SofaPiece width="3" height="0.9" depth="0.25" color="dimgrey" position="0 0.6 -0.625"/>

            <SofaPiece width="2.5" height="0.3" depth="1.25" position="0 0.25 0.125"></SofaPiece>
            <SofaPiece width="1" height="0.8" depth="0.2" position="-0.7 0.85 -0.3" rotation="-25 0 0"></SofaPiece>
            <SofaPiece width="1" height="0.8" depth="0.2" position="0.7 0.85 -0.3" rotation="-25 0 0"></SofaPiece>
        </a-entity>
    );
};

export default Sofa;