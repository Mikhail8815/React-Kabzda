import React from "react";

type ItemType = {
    title: string,
    value: any
}
type AccordionProps = {
    title: string,
    collapsed: boolean,
    onChange: () => void,
    items: ItemType[],
    onClick: (value: string) => void
}

export function Accordion(props: AccordionProps) {
        return (
            <>
                <AccordionTitle onChange={props.onChange} title={props.title}/>
                {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </>
        )
}

// export function Accordion1(props: AccordionProps) {
//     if (!props.collapsed) {
//         <AccordionTitle title={props.title}/>
//     }
//     return (
//         <>
//             <AccordionTitle title={props.title}/>
//             <AccordionBody/>
//         </>
//     )
// }


type AccordionTitleProps = {
    title: string;
    onChange: ()=>void;
}

function AccordionTitle({title, onChange}: AccordionTitleProps) {
    console.log('AccordionTitle');
    return <h3 onClick={onChange}>{title}</h3>
}

type AccordionBodyProps = {
    items: ItemType[],
    onClick: (value: string) => void
}

function AccordionBody(props: AccordionBodyProps) {
    console.log('AccordionBody');
    return (
        <ul>
            {props.items.map((i, index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}