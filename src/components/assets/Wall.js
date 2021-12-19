import React from 'react';

const Door = ({width,height,...props}) => {
    return(
        <a-box roughness="1" src="#wall" repeat={`${width/2} ${height/2}`} width={width} height={height} {...props}></a-box>
    );
};

export default Door;