import React from 'react';

const KitchenTable = (props) => {
    return(
        <a-entity {...props}>
            <a-entity class="static-body" position="-1.45 0.45 -0.45" geometry="primitive: box; height: 0.9; depth: 0.1; width: 0.1;" material="src: #kitchenTableWood"></a-entity>
            <a-entity class="static-body" position="-1.45 0.45 0.45" geometry="primitive: box; height: 0.9; depth: 0.1; width: 0.1;" material="src: #kitchenTableWood"></a-entity>
            <a-entity class="static-body" position="1.45 0.45 -0.45" geometry="primitive: box; height: 0.9; depth: 0.1; width: 0.1;" material="src: #kitchenTableWood"></a-entity>
            <a-entity class="static-body" position="1.45 0.45 0.45" geometry="primitive: box; height: 0.9; depth: 0.1; width: 0.1;" material="src: #kitchenTableWood"></a-entity>
            <a-entity class="static-body" position="0 0.95 0" geometry="primitive: box; height: 0.1; depth: 1.2; width: 3.3;" material="src: #kitchenTableWood"></a-entity>
            {props.children}
        </a-entity>
    );
};

export default KitchenTable;