import React from 'react';

const ComputerMonitor = (props) => {
    return(
        <a-entity {...props}>
            <a-entity class="static-body" position="0 0 0" geometry="primitive: box; height: 0.05; depth: 0.5; width: 0.5;" material="color: black"></a-entity>
            <a-entity class="static-body" position="0 0.25 -0.20" geometry="primitive: box; height: 0.5; depth: 0.1; width: 0.1;" material="color: black"></a-entity>
            <a-entity class="static-body" position="0 0.45 -0.10" geometry="primitive: box; height: 0.1; depth: 0.2; width: 0.1;" material="color: black"></a-entity>
            <a-entity class="static-body" position="0 0.45 0" geometry="primitive: box; height: 0.6; depth: 0.1; width: 1;" material="color: black"></a-entity>
        </a-entity>
    );
};

export default ComputerMonitor;