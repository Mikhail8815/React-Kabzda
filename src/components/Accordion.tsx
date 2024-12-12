import React from "react";

type AccordionProps = {
    title: string,
    collapsed: boolean,
    onChange: () => void
}
export function Accordion(props: AccordionProps) {
        return (
            <>
                <AccordionTitle onChange={props.onChange} title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
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