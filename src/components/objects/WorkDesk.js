import React from 'react';
import ComputerMonitor from '../assets/ComputerMonitor';
import TelevisionTable from '../assets/TelevisionTable';

const WorkDesk = (props) => {
    return(
        <a-entity {...props}>
            <ComputerMonitor rotation={"0 15 0"} position={"-.6 .45 0"}/>
            <ComputerMonitor rotation={"0 -15 0"} position={".6 .45 0"}/>
            <TelevisionTable position={"0 0 0"}/>
        </a-entity>
    );
};

export default WorkDesk;