import React from 'react';

const KitchenChair = (props) => {
    return(
        <a-entity {...props}>
            <a-box position="0 0.5 0" src="#kitchenTableWood" height="0.05" width="0.6" depth="0.6"></a-box>

            <a-box rotation="8 0 8" position="0.28 0.25 -0.28" src="#kitchenTableWood" height="0.55" width="0.05" depth="0.05"></a-box>
            <a-box rotation="-8 0 8" position="0.28 0.25 0.28" src="#kitchenTableWood" height="0.55" width="0.05" depth="0.05"></a-box>
            <a-box rotation="8 0 -8" position="-0.28 0.25 -0.28" src="#kitchenTableWood" height="0.55" width="0.05" depth="0.05"></a-box>
            <a-box rotation="-8 0 -8" position="-0.28 0.25 0.28" src="#kitchenTableWood" height="0.55" width="0.05" depth="0.05"></a-box>

            <a-box rotation="-8 0 0" position="0 0.10 0.30" src="#kitchenTableWood" height="0.025" width="0.55" depth="0.025"></a-box>
            <a-box rotation="8 0 0" position="0 0.10 -0.30" src="#kitchenTableWood" height="0.025" width="0.55" depth="0.025"></a-box>
            <a-box rotation="0 0 8" position="0.30 0.10 0" src="#kitchenTableWood" height="0.025" width="0.025" depth="0.55"></a-box>
            <a-box rotation="0 0 -8" position="-0.30 0.10 0" src="#kitchenTableWood" height="0.025" width="0.025" depth="0.55"></a-box>

            <a-box rotation="6 0 -6" position="0.28 0.825 0.28" src="#kitchenTableWood" height="0.6" width="0.05" depth="0.05"></a-box>
            <a-box rotation="6 0 6" position="-0.28 0.825 0.28" src="#kitchenTableWood" height="0.6" width="0.05" depth="0.05"></a-box>

            <a-box rotation="6 0 0" position="0 1 0.3" src="#kitchenTableWood" height="0.2" width="0.6" depth="0.03"></a-box>
        </a-entity>
    );
};

export default KitchenChair;