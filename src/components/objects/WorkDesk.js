import React from 'react';
import ComputerMonitor from '../assets/ComputerMonitor';
import TelevisionTable from '../assets/TelevisionTable';
import ComputerChair from '../assets/ComputerChair';
import Computer from '../assets/Computer';
import KeyBoard from '../assets/KeyBoard';

const WorkDesk = (props) => {
    return(
        <a-entity {...props}>
            <a-entity position={"0 0.4 0"}>
                <ComputerMonitor rotation={"0 15 0"} position={"-.6 .45 -0.18"}/>
                <ComputerMonitor rotation={"0 -15 0"} position={".6 .45 -0.18"}/>
                <KeyBoard rotation={"8 6 0"} position={"-0.2 .46 0.23"}/>
                <TelevisionTable position={"0 0 0"}/>
            </a-entity>
            <Computer position={"1.2 0 0"}/>
            <ComputerChair rotation={"0 150 0"} position={"-0.4 0 1"}/>
        </a-entity>
    );
};

export default WorkDesk;