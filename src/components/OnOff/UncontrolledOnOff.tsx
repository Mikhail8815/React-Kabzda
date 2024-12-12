import React from 'react';

type PropsType = {
    on: boolean
    onClick: (val: boolean)=>void
}



export const UncontrolledOnOff = ({on, onClick}: PropsType) => {

    const onStyle = {
        border: "1px solid black",
        width: "30px",
        display: "inline-block",
        backgroundColor:on ? "green" : "white",

    }
    const offStyle = {
        border: "1px solid black",
        width: "30px",
        display: "inline-block",
        backgroundColor: on? "white" : "red",
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>onClick(true)}>On</div>
            <div style={offStyle} onClick={()=>onClick(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
};

