import React from 'react';

const Bed = (props) => {
    return(
        <a-entity class="static-body" {...props} gltf-model="#bed"></a-entity>
    );
};

export default Bed;