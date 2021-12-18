import React from 'react';
import Wall from './Wall';

const Door = ({wallWidth,wallHeight,doorWidth,doorHeight,position,rotation, depth, src}) => {
    return(
        <a-entity position={position} rotation={rotation}>
            <Wall depth={depth} width={(wallWidth - doorWidth) / 2} height={wallHeight} position={`${(wallWidth + doorWidth) / 4} 0 0`}/>
            <Wall depth={depth} width={doorWidth} height={wallHeight - doorHeight} position={`0 ${doorHeight/2} 0`}/>
            <Wall depth={depth} width={(wallWidth - doorWidth) / 2} height={wallHeight} position={`-${(wallWidth + doorWidth) / 4} 0 0`}/>
            <a-box door-component src="#door" depth={depth} width={doorWidth} height={doorHeight} position={`0 ${(doorHeight - wallHeight)/2} 0`}></a-box>
            {/* Door */}
        </a-entity>
    );
};

export default Door;