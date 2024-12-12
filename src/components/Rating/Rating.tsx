import React from "react";
import {ratingValueType} from "../../App";

type RatingProps = {
    value: ratingValueType;
    onClick: (value: ratingValueType) => void;
};

export function Rating(props: RatingProps) {
    return (
        <div>
        <Star onClick={()=>props.onClick(1)} selected={props.value > 0}/>
        <Star onClick={()=>props.onClick(2)} selected={props.value > 1}/>
        <Star onClick={()=>props.onClick(3)} selected={props.value > 2}/>
        <Star onClick={()=>props.onClick(4)} selected={props.value > 3}/>
        <Star onClick={()=>props.onClick(5)} selected={props.value > 4}/>
    </div>
    )
    // if (props.value === 1) {
    //     return (
    //         <>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </>
    //     )
    // }
    // if (props.value === 2) {
    //     return (
    //         <>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </>
    //     )
    // }
    // if (props.value === 3) {
    //     return (
    //         <>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </>
    //     )
    // }
    // if (props.value === 4) {
    //     return (
    //         <>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </>
    //     )
    // }
    // if (props.value === 5) {
    //     return (
    //         <>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </>
    //     )
    // }
    // return (
    //     <>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </>
    // )
}

type StarProps = {
    selected: boolean
    onClick: () => void;
}

function Star(props: StarProps) {
    return <span onClick={props.onClick}>{props.selected ? <b>Star </b> : "star "}</span>
}