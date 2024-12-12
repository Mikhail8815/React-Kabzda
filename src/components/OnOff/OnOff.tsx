import React from 'react';

type PropsType = {
    // on: boolean
}



export const OnOff = () => {
    const [on, setOn] = React.useState(false)

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
            <div style={onStyle} onClick={()=>setOn(true)}>On</div>
            <div style={offStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
};

