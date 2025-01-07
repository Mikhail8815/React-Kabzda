import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";



type AccordionProps = {
    title: string;
}

export function UncontrolledAccordion(props: AccordionProps) {

    // const [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    // const onclickHandler = () => {
    //     setCollapsed(!collapsed)
    // }
        return (
            <>
                <AccordionTitle title={props.title} onClick={()=>dispatch({type: TOGGLE_COLLAPSED})} />
                {!state.collapsed && <AccordionBody/>}
            </>
        )
}


type AccordionTitleProps = {
    title: string;
    onClick: ()=>void
}

function AccordionTitle({title, onClick}: AccordionTitleProps) {
    console.log('AccordionTitle');
    return <h3 onClick={onClick}>{title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}