import React from 'react';

const TelevisionTable = (props) => {
    return(
        <a-entity {...props}>
            <a-entity class="static-body" position="-1.45 0.45 -0.45" geometry="primitive: box; height: 0.8; depth: 0.1; width: 0.1;" material="color: #C19A6B"></a-entity>
            <a-entity class="static-body" position="-1.45 0.45 0.45" geometry="primitive: box; height: 0.8; depth: 0.1; width: 0.1;" material="color: #C19A6B"></a-entity>
            <a-entity class="static-body" position="1.45 0.45 -0.45" geometry="primitive: box; height: 0.8; depth: 0.1; width: 0.1;" material="color: #C19A6B"></a-entity>
            <a-entity class="static-body" position="1.45 0.45 0.45" geometry="primitive: box; height: 0.8; depth: 0.1; width: 0.1;" material="color: #C19A6B"></a-entity>
            <a-entity class="static-body" position="0 0.9 0" geometry="primitive: box; height: 0.1; depth: 1; width: 3;" material="color: #C19A6B"></a-entity>
            {props.children}
        </a-entity>
    );
};

export default TelevisionTable;