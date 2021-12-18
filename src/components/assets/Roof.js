import React from 'react';

const Roof = ({width,height,depth,x,y,z}) => {
    return(
        <a-entity position={`${x} ${height / 2 + y} ${z}`}>
            <a-triangle src="#roof" vertex-a={`${width/2} -${height/2} ${depth/2}`} vertex-b={`0 ${height/2} 0`} vertex-c={`-${width/2} -${height/2} ${depth/2}`}></a-triangle>
            <a-triangle src="#roof" vertex-a={`${width/2} -${height/2} ${depth/2}`} vertex-b={`${width/2} -${height/2} -${depth/2}`} vertex-c={`0 ${height/2} 0`}></a-triangle>
            <a-triangle src="#roof" vertex-a={`-${width/2} -${height/2} ${depth/2}`} vertex-b={`0 ${height/2} 0`} vertex-c={`-${width/2} -${height/2} -${depth/2}`}></a-triangle>
            <a-triangle src="#roof" vertex-a={`-${width/2} -${height/2} -${depth/2}`} vertex-b={`0 ${height/2} 0`} vertex-c={`${width/2} -${height/2} -${depth/2}`}></a-triangle>
            {/* Ceiling */}
            <a-plane width={width} height={depth} src="#ceiling" repeat={`${width/2} ${depth/2}`} rotation="90 0 0" position={`0 ${-height/2 + 0.01} 0`} side="double"></a-plane>
        </a-entity>
    );
};

export default Roof;